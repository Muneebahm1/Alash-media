'use server';
import   {AuthError}  from 'next-auth';
import { signIn } from '@/auth';
import {taiconn} from '@/app/lib/db';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import {z} from 'zod';
import axios from 'axios'
import {put} from '@vercel/blob';
import {uploadMediaOnServer} from '@/app/lib/server/utils';


export async function authenticate(prevState: string | undefined,
    formData: FormData,
) {
    try {
        await signIn('credentials',formData);
        //console.log(formData.get('email') as string);
        //console.log(formData.get('password') as string)
        
    }
    catch(error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return 'Invalid credentials';
                default:
                    return 'Something went wrong';
            }
        }
        throw error;
    }
}

 const MAX_PIC_SIZE = 2*1024*1024;
 const MEDIA_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp","video/*"];
 const NewsFormSchema = z.object({
    id: z.string().uuid(),
    title: z.string().min(1,"You can't leave blank,Title is required"),
    subtitle: z.string().min(1,"You can't leave blank,Sub-title is required"),
    content: z.string().min(1,'Content is required'),
    kktitle: z.string().min(1,"You can't leave blank,Kazakh Title is required"),
    kksubtitle: z.string().min(1,"You can't leave blank,Kazakh Sub-title is required"),
    kkcontent: z.string().min(1,'Kazakh Content is required'),
    rutitle: z.string().min(1,"You can't leave blank,Russian Title is required"),
    rusubtitle: z.string().min(1,"You can't leave blank,Russian Sub-title is required"),
    rucontent: z.string().min(1,'Russian Content is required'),
    author_name: z.string().min(1,'Author is required'),
    category_id: z.string().min(1,'Category is required'),
    subcategory_id: z.string().min(1,'Sub Category is required'),
    media: z
    .instanceof(File,{message: 'Media file is required'})
    .refine((file) => file.size <= MAX_PIC_SIZE, `Max media size is ${MAX_PIC_SIZE / (1024 * 1024)}MB.`)
    .refine((file) => MEDIA_TYPES.includes(file.type),"Only .jpg, .jpeg, .png, and .webp or vidio formats are supported.")
    .refine((file) => file.size > 0 || file === null, "Image is required for new articles."),
    media_url: z.string().url("Invalid media path").optional(), // It will be a URL string in the DB
    tags: z.array(z.string()).min(1, "At least one tag must be selected"),
    slug: z.string(),
    section: z.string().min(1,'Section is required'),
    date_time: z.date(),
});

const CreateArticle = NewsFormSchema.omit({id: true,slug: true,date_time: true,media_url:true});



export async function publishNews(id:string | null,actionType: string,formData?: FormData){
    /*const contentFromForm = formData?.get('content') as string || '';
  console.log('Content value received on server:', contentFromForm);
  console.log('Plain text derived from content (server-side):', contentFromForm.replace(/<[^>]*>/g, '').trim());*/
    
    const {title,kktitle,rutitle,subtitle,kksubtitle,rusubtitle,author_name,category_id,subcategory_id,media,tags,content,kkcontent,rucontent,section} = CreateArticle.parse({
            title: formData?.get('title') as string || '',
            kktitle: formData?.get('kktitle') as string || '',
            rutitle: formData?.get('rutitle') as string || '',
            subtitle: formData?.get('subtitle') as string || '',
            kksubtitle: formData?.get('kksubtitle') as string || '',
            rusubtitle: formData?.get('rusubtitle') as string || '',
            author_name: formData?.get('author') as string || '',
            category_id: formData?.get('category') as string || '',
            subcategory_id: formData?.get('subcategory') as string || '',
            media: formData?.get('media') as File || null,
            tags: formData?.getAll('tags') as string[] || [], 
            content: formData?.get('content') as string || '',
            kkcontent: formData?.get('kkcontent') as string || '',
            rucontent: formData?.get('rucontent') as string || '',
            section: formData?.get('newstype') as string || '',

        })
        console.log(`Original Title=${title}`);
        
        /********************************* Insert new news for publishment***************************/
        const vslug = createNewsSlug(title);
        const vreadTime = calculateReadTime(content);
        
        let vimage_url: string | null = '';

        /*const vuploadDir: string | null = `images/${section}`   // store images on local computer
        try {
        // upload the image (on server)
        if (media instanceof File) { // Ensure it's a File object from validation
            vimage_url = await uploadMediaOnServer(media,vuploadDir); // This function uploads on local and returns the URL/path
            //vimage_url = await uploadMediaToBlob(media,section); // This function uploads on vercel and returns the URL/path
        }
        } catch (error) {
            console.log(`Image Url in Catch:${vimage_url}`)
            console.error("Image upload failed:", error);
            return {message: "Failed to upload image."};
        }*/
        if (media && media.size > 0) {
            try {
                // Save author image to local public/images/authors and get a public URL path
                vimage_url = await uploadMediaOnServer(media, 'images/authors');
            } catch (error) {
                console.error('Local image upload failed:', error);
                // If desired, you could fallback to Vercel Blob here
                // const blob = await put(media.name, media, { access: 'public', addRandomSuffix: true });
                // vimage_url = blob.url;
            }
        }

        //onsole.log(`Image Url in CategoryA:${vimage_url}`)
        //console.log(`Created Slug=${vslug}`);
        const vdateTime = new Date().toISOString().slice(0,19).replace('T',' ');
        //console.log(`Image Url=${vimage_url}`);
        if (actionType === "Publish") {
           insertNews(author_name,title,kktitle,rutitle,subtitle,kksubtitle,rusubtitle,category_id,subcategory_id,vimage_url,tags,content,kkcontent,rucontent,vslug,section,vdateTime,vreadTime);
        }
        else if (actionType === "Update") {
            updateNews(author_name,title,kktitle,rutitle,subtitle,kksubtitle,rusubtitle,category_id,subcategory_id,vimage_url,tags,content,kkcontent,rucontent,vslug,section,vdateTime,id || '',vreadTime);
        }
        else {
            throw new Error(`Unknown action type: ${actionType}`);
        }
                
        const redirectUrl = `?title=${encodeURIComponent(vslug)}`;
        console.log(`Sending Title= ${redirectUrl}`);
        //revalidatePath(redirectUrl);
        //redirect(redirectUrl);
        revalidatePath('/dashboard/news');
        redirect('/dashboard/news');
        //console.log(articles.rows[0]);s
        
}
/************************************ Insertion Code in javascript and postgresql*******************/
function createNewsSlug(text:string):string {
    return text
    .toLocaleLowerCase() 
    .trim() // remove all whitespaces
    .replace(/[^a-z0-9 -]/g, '') // Remove invalid characters and only keep (letters, numbers, spaces, hyphens) 
    .replace(/\s+/g, '-') // remove spaces with single hyphen
    .replace(/-+/g, '-') // remove multiple hypens with single hyphen
}

function calculateReadTime(content: string) {
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / 200); 
  return minutes;
}

/*******************************************Insert new author and news for publishment of news ********/
async function insertNews(author_name:string,title:string,kktitle:string,rutitle:string,subtitle:string,kksubtitle:string,rusubtitle:string,category_id:string,subcategory_id:string,vimage_url:string,tags:string[],content: string,kkcontent: string,rucontent: string,vslug:string,section:string,vdateTime:string,vreadTime:number) {        
    try {
        
        const authorData =  await taiconn.query(`SELECT id,name FROM authors
                WHERE name = '${author_name}' 
                `);
        console.log(`category_id for Insert: ${category_id}`);
        const newsData = await taiconn.query(`INSERT INTO news (author_id,title,subtitle,category_id,subcategory_id,image_url,content,slug,section,date_time,read_time)
                VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11) 
                RETURNING id `,
            [authorData.rows[0].id,title,subtitle,category_id,subcategory_id,vimage_url,content,vslug,section,vdateTime,vreadTime]);
            const newsId = newsData.rows[0].id;    
        
        const kkData = await taiconn.query(`INSERT INTO translations (news_id,title,subtitle,content,language)
                VALUES ($1,$2,$3,$4,$5) 
                RETURNING id `,
            [newsId,kktitle,kksubtitle,kkcontent,'kk']);                    

        const ruData = await taiconn.query(`INSERT INTO translations (news_id,title,subtitle,content,language)
                VALUES ($1,$2,$3,$4,$5) 
                RETURNING id `,
            [newsId,rutitle,rusubtitle,rucontent,'ru']);
        
        const newstagsData = [];
        for (const tagId of tags) {
            const result = await taiconn.query(`
            INSERT INTO news_tags (news_id, tag_id) 
            VALUES ($1, $2)
            `, [newsId, tagId]);
            newstagsData.push(result);
        } 

        /*const tags = tagIds.map(tagId => [newsId, tagId]);
        const values = tags.map(([newsId, tagId]) =>   `('${newsId}', '${tagId}')`).join(', ');
        
        console.log(`tagduringInsert:${values}`)
        const newstagsData = await taiconn.query(`
        INSERT INTO news_tags (news_id, tag_id)
        VALUES ${values};
            `);*/

            return {newsData,kkData,ruData,newstagsData};
                        
        }
    catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to insert news data');
    }
}

async function updateNews(author_name:string,title:string,kktitle:string,rutitle:string,subtitle:string,kksubtitle:string,rusubtitle:string,category_id:string,subcategory_id:string,vimage_url:string,tags:string[],content: string,kkcontent:string,rucontent:string,vslug:string,section:string,vdateTime:string,id:string,vreadTime:number) {        
    try {
                    
        const authorData =  await taiconn.query(`SELECT id,name FROM authors
                WHERE name = '${author_name}' 
                `);
        const updateData = await taiconn.query(`UPDATE news
            SET author_id = $1,title = $2,subtitle = $3, category_id = $4,subcategory_id = $5,image_url = $6,content = $7,slug = $8,section = $9,date_time = $10,read_time = $11
            WHERE id = $12`,
            [authorData.rows[0].id,title,subtitle,category_id,subcategory_id,vimage_url,content,vslug,section,vdateTime,vreadTime,id]);

            const newsId = updateData.rows[0].id;    
        
        const updateKKData = await taiconn.query(`UPDATE translations
            SET title = $1,subtitle = $2,content = $3
            WHERE news_id = $4 and language = $5`,
            [kktitle,kksubtitle,kkcontent,id,'kk']);

        const updateRUData = await taiconn.query(`UPDATE translations
            SET title = $1,subtitle = $2,content = $3
            WHERE news_id = $4 and language = $5`,
            [rutitle,rusubtitle,rucontent,id,'ru']);

        const newstagsData = [];
        for (const tagId of tags) {
            const result = await taiconn.query(`
            UPDATE news_tags 
            set news_id = $1, tag_id = $2 
            `, [newsId, tagId]);
            newstagsData.push(result);
        } 
        
        /*const values = tags.map(tagId => `(${id}, ${tagId})`).join(", ");

        const newstagsData = await taiconn.query(`
        UPDATE news_tags 
        SET news_id = $1,tag_id = $2`,
        [values]);*/

            return {updateData,updateKKData,updateRUData,newstagsData};
                                
        }
    catch (error) {
        console.error('Database Error:', error);
        throw new Error("Failed to update news' data");
    }
}

/*****************************************   Get and Insert Authors Form Data *****************************************/
const AuthorFormSchema = z.object({
    id: z.string().uuid(),
    name: z.string().min(1,"Author's name is required"),
    email: z.string().min(1,'Email is required'),
    media: z
    .instanceof(File,{message: 'Image file is required'})
    .refine((file) => file.size <= MAX_PIC_SIZE, `Max image size is ${MAX_PIC_SIZE / (1024 * 1024)}MB.`)
    .refine((file) => MEDIA_TYPES.includes(file.type),"Only .jpg, .jpeg, .png, and .webp.")
    .refine((file) => file.size > 0 || file === null, "Image is required for new author."),
    //image_url: z.string().url("Invalid image path").optional(), // It will be a URL string in the DB
    biography: z.string().min(1,'Biography is required'),
});

const CreateAuthor = AuthorFormSchema.omit({id: true});

export async function addAuthor(id:string | null,actionType: string,formData?: FormData) {
    /*const contentFromForm = formData?.get('content') as string || '';
  console.log('Content value received on server:', contentFromForm);
  console.log('Plain text derived from content (server-side):', contentFromForm.replace(/<[^>]*>/g, '').trim());*/
    
    const {name, email,media, biography} = CreateAuthor.parse({
            //actionType: formData?.get('action_type') as string || '',
            name: formData?.get('author') as string || '',
            email: formData?.get('email') as string || '',
            media: formData?.get('media') as File || null,
            biography: formData?.get('biography') as string || '',
        })
        
        /********************************* Insert new news for publishment***************************/
        let vimage_url: string | null = '';
        
        /*const vuploadDir: string | null = 'authors'  // for save images on local computer after make new directory
        try {
        // upload the image (on server)
        if (media instanceof File) { // Ensure it's a File object from validation
            vimage_url = await uploadMediaOnServer(media,vuploadDir); // This function uploads on local and returns the URL/path
            //vimage_url = await uploadMediaToBlob(media,vuploadDir); // This function uploads on vercel and returns the URL/path
        }
        } catch (error) {
            console.log(`Image Url in Catch:${vimage_url}`)
            console.error("Image upload failed:", error);
            //return {message: "Failed to upload image."};
        }*/

        if (media && media.size > 0) {
            try {
                // Save author image locally to public/images/authors and get a public URL path
                vimage_url = await uploadMediaOnServer(media, 'images/authors');
            }
            catch(error) {
                console.error('Local image upload failed:', error);
            }
        }

        //const vdateTime = new Date().toISOString().slice(0,19).replace('T',' ');
        if (actionType === "Add New") {
            insertAuthor(name,email,vimage_url,biography);
        }
        else if (actionType === "Update") {
            updateAuthor(name,email,vimage_url,biography,id || '');
        }
        else {
            throw new Error(`Unknown action type: ${actionType}`);
        }
                
                
        revalidatePath('/dashboard/authors');
        redirect('/dashboard/authors');
   
}
/************************************ Insertion Code in javascript and postgresql*******************/

/*******************************************Insert new author  ********/
async function insertAuthor(name:string, email:string,image_url:string,biography: string) {        
    try {
                    
        const authorData = await taiconn.query(`INSERT INTO authors (name,email,image_url,biography)
                VALUES ($1,$2,$3,$4) 
                RETURNING id `,
            [name,email,image_url,biography]);
        
            return {authorData};
                        
        }
    catch (error) {
        console.error('Database Error:', error);
        throw new Error("Failed to insert author's data");
    }
}

async function updateAuthor(name:string, email:string,image_url:string,biography: string,id:string) {        
    try {
                    
        const updateData = await taiconn.query(`UPDATE authors
            SET name = $1,email = $2, image_url = $3,biography = $4
            WHERE id = $5`,
            [name,email,image_url,biography,id]);
        
            return {updateData};
                        
        }
    catch (error) {
        console.error('Database Error:', error);
        throw new Error("Failed to update author's data");
    }
}

/****************************     Questions ********************* */

/*****************************************   Get and Insert Questions Form Data *****************************************/
const QuestionFormSchema = z.object({
    id: z.string().uuid(),
    qdetail: z.string().min(1,"Question's Text is required"),
    option1: z.string().min(1,'First option is required'),
    option2: z.string().min(1,'Second option is required'),
    option3: z.string().min(1,'Third option is required'),
    answer: z.string().min(1,'Answer is required'),
});

const CreateQuestion = QuestionFormSchema.omit({id: true});

export async function addQuestion(id:string | null,actionType: string,formData?: FormData) {
    /*const contentFromForm = formData?.get('content') as string || '';
  console.log('Content value received on server:', contentFromForm);
  console.log('Plain text derived from content (server-side):', contentFromForm.replace(/<[^>]*>/g, '').trim());*/
    
    const {qdetail, option1,option2,option3,answer} = CreateQuestion.parse({
            //actionType: formData?.get('action_type') as string || '',
            qdetail: formData?.get('qdetail') as string || '',
            option1: formData?.get('option1') as string || '',
            option2: formData?.get('option2') as string || '',
            option3: formData?.get('option3') as string || '',
            answer: formData?.get('answer') as string || '',
        })
        
        /********************************* Insert new news for publishment***************************/
         const vdateTime = new Date().toISOString().slice(0,19).replace('T',' ');        

        //const vdateTime = new Date().toISOString().slice(0,19).replace('T',' ');
        if (actionType === "Add New") {
            insertQuestion(qdetail,option1,option2,option3,answer,vdateTime);
        }
        else if (actionType === "Update") {
            updateQuestion(qdetail,option1,option2,option3,answer,vdateTime,id || '');
        }
        else {
            throw new Error(`Unknown action type: ${actionType}`);
        }
                
                
        revalidatePath('/dashboard/questions');
        redirect('/dashboard/questions');
   
}
/************************************ Insertion Code in javascript and postgresql*******************/

/*******************************************Insert new author  ********/
async function insertQuestion(qdetail:string, option1:string,option2:string,option3:string,answer: string,vdateTime: string) {        
    try {
                    
        const questionData = await taiconn.query(`INSERT INTO questions (qdetail,option1,option2,option3,correct,date_time)
                VALUES ($1,$2,$3,$4,$5,$6) 
                RETURNING id `,
            [qdetail,option1,option2,option3,answer,vdateTime]);
        
            return {questionData};
                        
        }
    catch (error) {
        console.error('Database Error:', error);
        throw new Error("Failed to insert Question's data");
    }
}

async function updateQuestion(qdetail:string, option1:string,option2:string,option3:string,answer: string,vdateTime: string,id: string) {        
    try {
                    
        const updateData = await taiconn.query(`UPDATE questions
            SET qdetail = $1,option1 = $2,option2 = $3,option3 = $4, correct = $5,dateTime = $6
            WHERE id = $7`,
            [qdetail,option1,option2,option3,answer,vdateTime,id]);
        
            return {updateData};
                        
        }
    catch (error) {
        console.error('Database Error:', error);
        throw new Error("Failed to update question's data");
    }
}

/*****************************************   Get and update Answer of Voter using Form Data *****************************************/

const VoterFormSchema = z.object({
    question_id: z.string().min(1,"Question id is required"),
    selected_option: z.string().min(1,'must be selected one option'),
    
});

const CreateVote = VoterFormSchema;

export async function addVote(prevState: { message: string | null },formData?: FormData):Promise<{ message: string | null }> {
    /*const contentFromForm = formData?.get('content') as string || '';
  console.log('Content value received on server:', contentFromForm);
  console.log('Plain text derived from content (server-side):', contentFromForm.replace(/<[^>]*>/g, '').trim());*/
    
    const {question_id,selected_option} = CreateVote.parse({
            //actionType: formData?.get('action_type') as string || '',
            question_id: formData?.get('id') as string || '',
            selected_option: formData?.get('option') as string || '',
            
        })
        
        /********************************* Insert new news for publishment***************************/
        
        const result = updateVote(selected_option,question_id);
        if (Number((await result).rowcount) > 0) {
                return { message: "Answer submitted successfully"};
        }
        else {
             return {message:'Not allowed to vote more than once'};
        }
                       
        //revalidatePath('/dashboard/questions');
        //redirect('/dashboard/questions');
        
   
}

/*******************************************update questions with vote  *************************/

async function updateVote(selected_option:string,question_id:string) {        
    try {
             
        const correctData =  await taiconn.query(`SELECT id,correct FROM questions
                WHERE id = '${question_id}' 
                `);
        const isCorrect = selected_option === correctData.rows[0].correct ? true : false;

        const updateData = await taiconn.query(`UPDATE questions
            SET vote = $1,iscorrect = $2
            WHERE id = $3 and (vote IS NULL or vote = $4) `,
            [selected_option,isCorrect,question_id,'']);
            
            return {rowcount: updateData.rowCount}
                       
                                           
        }
    catch (error) {
        console.error('Database Error:', error);
        throw new Error("Failed to submit vote more than once");
        
    }
}


export async function deleteNews(id:string):Promise<void> {        
    try {
            await taiconn.query(`DELETE FROM news
            WHERE id = '${id}'`
            );
            revalidatePath('/dashboard/news');
            //return {deleteData};
                        
        }
    catch (error) {
        console.error('Database Error:', error);
        throw new Error("Failed to delete author's data");
    }
}

export async function deleteAuthor(id:string):Promise<void> {        
    try {
            await taiconn.query(`DELETE FROM authors
            WHERE id = '${id}'`
            );
            revalidatePath('/dashboard/authors');
            //return {deleteData};
                        
        }
    catch (error) {
        console.error('Database Error:', error);
        throw new Error("Failed to delete author's data");
    }
}

export async function deleteCategory(id:string):Promise<void> {        
    try {
            await taiconn.query(`DELETE FROM categories
            WHERE category_id = '${id}'`
            );
            revalidatePath('/dashboard/categories');
            //return {deleteData};
                        
        }
    catch (error) {
        console.error('Database Error:', error);
        throw new Error("Failed to delete category's data");
    }
}

export async function deleteTag(id:string):Promise<void> {        
    try {
            await taiconn.query(`DELETE FROM tags
            WHERE id = '${id}'`
            );
            revalidatePath('/dashboard/tags');
            //return {deleteData};
                        
        }
    catch (error) {
        console.error('Database Error:', error);
        throw new Error("Failed to delete tag's data");
    }
}

export async function deleteQuestion(id:string):Promise<void> {        
    try {
            await taiconn.query(`DELETE FROM questions
            WHERE id = '${id}'`
            );
            revalidatePath('/dashboard/questions');
            //return {deleteData};
                        
        }
    catch (error) {
        console.error('Database Error:', error);
        throw new Error("Failed to delete question's data");
    }
}

/*****************************************   Get and Insert Category and Sub-category Form Data *****************************************/
const CategoryFormSchema = z.object({
    category: z.string().min(1,"Category name is required"),
    subcategory: z.string().min(1,'Sub-category is required'),
});

const CreateCategory = CategoryFormSchema;

export async function addCategory(id:string | null,actionType: string,formData?: FormData) {
    /*const contentFromForm = formData?.get('content') as string || '';
  console.log('Content value received on server:', contentFromForm);
  console.log('Plain text derived from content (server-side):', contentFromForm.replace(/<[^>]*>/g, '').trim());*/
    
    const {category, subcategory} = CreateCategory.parse({
            category: formData?.get('category') as string || '',
            subcategory: formData?.get('subcategory') as string || '',
        })
                
        /********************************* Insert new news for publishment***************************/
        if (actionType === "Add New") {
            insertCategory(category);
            insertSubCategory(category,subcategory);
        }
        else if (actionType === "Update") {
            updateCategory(category,id || '');
            updateSubCategory(category,subcategory,id || '');
        }
        else {
            throw new Error(`Unknown action type: ${actionType}`);
        }
                               
        revalidatePath('/dashboard/categories');
        redirect('/dashboard/categories');
   
}

/*****************************************   Get and Insert Authors Form Data *****************************************/
const TagFormSchema = z.object({
    name: z.string().min(1,"Tag's name is required"),
    media: z
    .instanceof(File,{message: 'Image file is required'})
    .refine((file) => file.size <= MAX_PIC_SIZE, `Max image size is ${MAX_PIC_SIZE / (1024 * 1024)}MB.`)
    .refine((file) => MEDIA_TYPES.includes(file.type),"Only .jpg, .jpeg, .png, and .webp.")
    .refine((file) => file.size > 0 || file === null, "Image is required for new tag."),
    
});

const CreateTag = TagFormSchema;

export async function addTag(id:string | null,actionType: string,formData?: FormData) {
    /*const contentFromForm = formData?.get('content') as string || '';
  console.log('Content value received on server:', contentFromForm);
  console.log('Plain text derived from content (server-side):', contentFromForm.replace(/<[^>]*>/g, '').trim());*/
    
    const {name, media} = CreateTag.parse({
            name: formData?.get('name') as string || '',
            media: formData?.get('media') as File || null,
        })
        
        /********************************* Insert new news for publishment***************************/
        const vslug = createTagSlug(name);
        let vimage_url: string | null = '';
        
        /*const vuploadDir: string | null = 'Trending Topics'  this code is to save image on local computer after make dir
        try {
        // upload the image (on server)
        if (media instanceof File) { // Ensure it's a File object from validation
            vimage_url = await uploadMediaOnServer(media,vuploadDir); // This function uploads on local and returns the URL/path
            //vimage_url = await uploadMediaToBlob(media,vuploadDir); // This function uploads on vercel and returns the URL/path
        }
        } catch (error) {
            console.log(`Image Url in Catch:${vimage_url}`)
            console.error("Image upload failed:", error);
            //return {message: "Failed to upload image."};
        }*/

        if (media && media.size > 0) {
            try {    
                const blob = await put(media.name, media, {
                access: 'public',
                addRandomSuffix: true,
                });
                vimage_url = blob.url;
            }
            catch(error) {
                console.log(`Blob Url on Vercel:${vimage_url}`)
                console.error("Blob Image upload failed:", error);
            }
        }

        //const vdateTime = new Date().toISOString().slice(0,19).replace('T',' ');
        console.log(`Image Url=${vimage_url}`);
        if (actionType === "Add New") {
            insertTag(name,vslug,vimage_url);
        }
        else if (actionType === "Update") {
            updateTag(name,vslug,vimage_url,id || '');
        }
        else {
            throw new Error(`Unknown action type: ${actionType}`);
        }
        
                
        revalidatePath('/dashboard/tags');
        redirect('/dashboard/tags');
   
}
/************************************ Insertion Code in javascript and postgresql*******************/
function createTagSlug(text:string):string {
    return text
    .toLocaleLowerCase() 
    .trim() // remove all whitespaces
    .replace(/[^a-z0-9 -]/g, '') // Remove invalid characters and only keep (letters, numbers, spaces, hyphens) 
    .replace(/\s+/g, '-') // remove spaces with single hyphen
    .replace(/-+/g, '-') // remove multiple hypens with single hyphen
}
/*******************************************Insert new author  ********/
async function insertTag(name:string, vslug:string,image_url:string) {        
    try {
                    
        const tagData = await taiconn.query(`INSERT INTO tags (name,slug,image_url)
                VALUES ($1,$2,$3) 
                RETURNING id `,
            [name,vslug,image_url]);
        
            return {tagData};
                        
        }
    catch (error) {
        console.error('Database Error:', error);
        throw new Error("Failed to insert news tag");
    }
}

async function updateTag(name:string, vslug:string,image_url:string,id:string) {        
    try {
                    
        const updateData = await taiconn.query(`UPDATE tags
            SET name = $1,slug = $2, image_url = $3
            WHERE id = $4`,
            [name,vslug,image_url,id]);
        
            return {updateData};
                        
        }
    catch (error) {
        console.error('Database Error:', error);
        throw new Error("Failed to update tag's data");
    }
}

/************************************ Insertion Code in javascript and postgresql*******************/

/*******************************************Insert new author  ********/
async function insertCategory(category:string) {        
    try {
                
        const categoryData = await taiconn.query(`INSERT INTO categories (category_name)
                VALUES ($1)
                RETURNING category_id`,
            [category]);
     
            return categoryData     
        }
    catch (error) {
        console.error('Database Error:', error);
        throw new Error("Failed to insert category");
    }
    
}

async function insertSubCategory(category:string,subcategory:string) {        
    try {
                
        const categoryData =  await taiconn.query(`SELECT category_id,category_name FROM categories
                WHERE category_name = '${category}' 
                `);
        
        const subcategoryData = await taiconn.query(`INSERT INTO subcategories (subcategory_name,category_id)
                VALUES ($1,$2) 
                RETURNING subcategory_id `,
            [subcategory,categoryData.rows[0].category_id]);
        
            return {subcategoryData};
        }
    catch (error) {
        console.error('Database Error:', error);
        throw new Error("Failed to insert category");
    }
}

async function updateCategory(category:string, id:string) {        
    try {
                    
        const updateData = await taiconn.query(`UPDATE categories
            SET category_id = $1
            WHERE category_id = $2`,
            [category,id]);
        
            return {updateData};
                        
        }
    catch (error) {
        console.error('Database Error:', error);
        throw new Error("Failed to update category's data");
    }
}

async function updateSubCategory(category:string, subcategory:string,id:string) {        
    try {
        
        const categoryData =  await taiconn.query(`SELECT category_id,category_name FROM categories
                WHERE category_name = '${category}' 
                `);
        
        const updateData = await taiconn.query(`UPDATE subcategories
            SET subcategory_name = $1,category_id = $2
            WHERE category_id = $3`,
            [subcategory,categoryData.rows[0].category_id,id]);
        
            return {updateData};
                        
        }
    catch (error) {
        console.error('Database Error:', error);
        throw new Error("Failed to update subcategory's data");
    }
}

/*******************************    Fetch Functions ******************************** */
    /*************************    Authors ************************** */
export interface NewsAuthors {
  id: string,
  name: string,
}

export async function fetchNewsAuthors():Promise<NewsAuthors[]>  {
    const newsauthors = taiconn.query(`SELECT id,name
        FROM authors
        ORDER BY name`);
    return (await newsauthors).rows;
}    
    /*************************    Categories ************************** */
export interface Categories {
  category_id: string,
  category_name: string,
}

export async function fetchCategories():Promise<Categories[]>  {
    const categories = taiconn.query(`SELECT category_id,category_name
        FROM categories
        ORDER BY category_name`);
    return (await categories).rows;
}

        /*************************    Sub Categories ************************** */
export interface SubCategories {
  subcategory_id: string,
  subcategory_name: string,
  category_id: string,
}

export async function fetchSubCategories(selCategoryId: string):Promise<SubCategories[]>  {
    const subcategories = await taiconn.query(`SELECT subcategory_id,subcategory_name 
        FROM subcategories WHERE category_id = '${selCategoryId}' 
        ORDER BY subcategory_name`);
    return subcategories.rows;
}

/*************************    Tags ************************** */
export interface Tags {
  id: string,
  name: string,
}

export async function fetchTags():Promise<Tags[]>  {
    const tags = taiconn.query(`SELECT id,name
        FROM tags
        ORDER BY name`);
    return (await tags).rows;
}
/*************************************************** */
/************************************     Fetch Temperature From External API ****************************/

export async function getWeather(city: string) {
  const API_KEY = process.env.OPENWEATHER_API_KEY
  
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    )
    
    return {
      success: true,
      data: {
        temperature: response.data.main.temp,
        city: response.data.name,
        country: response.data.sys.country
      }
    }
  } catch (error) {
    return {
      success: false,
      error: `Failed to fetch weather data ${error}`
    }
  }
}
