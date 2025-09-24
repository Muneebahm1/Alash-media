import {taiconn} from '@/app/lib/db';

async function selectUsers() {
     const result = await taiconn.query(`SELECT * FROM users`);   
     //console.log(result.rows);
     return result;
 }
async function selectNews() {
     //const result = await taiconn.query(`SELECT * FROM news`); 
     const result = await taiconn.query(`SELECT news.id as id,authors.name as author_name,news.title as title,news.image_url as image_path,
         news.slug as slug,news.section as section,news.date_time::text as date_time,news.view_count as view_count FROM news JOIN authors ON news.author_id = authors.id
         ORDER BY news.date_time DESC`);
        //console.log(result.rows);  
        return result;
}  
 async function selectAuthors() {
     const result = await taiconn.query(`SELECT * FROM authors`);   
     //console.log(result.rows);
     return result;
 }
async function selectTags() {
    const result = await taiconn.query(`SELECT * FROM tags`);   
    //console.log(result.rows);
    return result;
}
async function selectCategories() {
     const result = await taiconn.query(`SELECT * FROM categories`);   
     //console.log(result.rows);
     return result;
 }

export async function GET() {
    try{
        return Response.json({users: await selectUsers(), news: await selectNews(),authors: await selectAuthors(),tag: await selectTags(),categories: await selectCategories()});
        
    }
    catch(error) {
        return Response.json({error, status:500});
    }
}