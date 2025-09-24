import {taiconn} from '@/app/lib/db';

 export async function selectUsers() {
     const result = await taiconn.query(`SELECT * FROM users`);   
     console.log(result.rows);
 }
 export async function selectNews() {
     //const result = await taiconn.query(`SELECT * FROM news`); 
     const result = await taiconn.query(`SELECT news.id as id,authors.name as author_name,news.title as title,news.slug as slug,
        news.section as section,news.image_url as image_path,
         news.date_time::text as date_time,news.view_count as view_count FROM news JOIN authors ON news.author_id = authors.id
         ORDER BY news.date_time DESC`);
     console.log(result.rows);  

 } 
export async function selectAuthors() {
    const result = await taiconn.query(`SELECT * FROM authors`);   
    console.log(result.rows);
}
export async function selectTags() {
    const result = await taiconn.query(`SELECT * FROM tags`);   
    console.log(result.rows);
}
 export async function selecTranslations() {
     //const result = await taiconn.query(`SELECT * FROM news`); 
     const result = await taiconn.query(`SELECT news_id,title,subtitle,
        content,language FROM translations 
         ORDER BY title`);
     console.log(result.rows);  

 } 

 export async function selectNewsTags() {
    const result = await taiconn.query(`SELECT * FROM news_tags`);   
    console.log(result.rows);
}

 export async function selectQuestions() {
    const result = await taiconn.query(`SELECT * FROM questions`);   
    console.log(result.rows);
}