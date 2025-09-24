import {taiconn} from '@/app/lib/db';
import {users,news,authors,categories,subcategories,tags,translations,news_tags,questions} from '@/app/lib/initial-data';
import bcrypt from 'bcryptjs';

export async function seedUsers() {
    await taiconn.query(`DROP TABLE IF EXISTS users`);
    await taiconn.query(`CREATE EXTENSION IF NOT EXISTS "pgcrypto"`);
    await taiconn.query(`CREATE TABLE IF NOT EXISTS users(
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        name TEXT NOT NULL,
        role TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        date_time TIMESTAMP DEFAULT NOW())`);
  
    const insertedUsers = await Promise.all(
        users.map(async(user)=>{
        const hashedPassword = await bcrypt.hash(user.password,10);
        return taiconn.query(`INSERT INTO users(name,role,email,password,date_time) 
            VALUES($1,$2,$3,$4,$5)
            ON CONFLICT (email) DO NOTHING`,
            [user.name,user.role,user.email,hashedPassword,user.date_time]
        );
        }),
    );
    return insertedUsers; 
 }
 
 export async function seedNews() {
    await taiconn.query(`DROP TABLE IF EXISTS news`);
    await taiconn.query(`CREATE EXTENSION IF NOT EXISTS "pgcrypto"`);
    await taiconn.query(`CREATE TABLE IF NOT EXISTS news(
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        author_id UUID NOT NULL,
        category_id UUID NOT NULL,
        subcategory_id UUID NOT NULL,
        title TEXT NOT NULL,
        subtitle TEXT NOT NULL,
        image_url TEXT,
        content TEXT,
        slug TEXT UNIQUE,
        section TEXT,
        view_count INT DEFAULT 0,
        read_time INT DEFAULT 0,
        date_time TIMESTAMP DEFAULT NOW())`);
        
    const insertedNews = await Promise.all(
        news.map(async(n)=>{
        return taiconn.query(`INSERT INTO news(id,author_id,category_id,subcategory_id,title,subtitle,image_url,content,slug,section,view_count,date_time) 
            VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)
            ON CONFLICT (slug) DO NOTHING`,
            [n.id,n.author_id,n.category_id,n.subcategory_id,n.title,n.subtitle,n.image_url,n.content,n.slug,n.section,n.view_count,n.date_time]
        );
        }),
    );
    return insertedNews; 
    
    /*try {
        await taiconn.query(`
        ALTER TABLE news 
        ADD COLUMN IF NOT EXISTS read_time INT DEFAULT 0
        `);
    
        console.log('Columns added successfully');
    } catch (error) {
        console.error('Error adding columns:', error);
    } finally {
        await taiconn.end();
    }*/
 }
 
  export async function seedTrnslations() {
    await taiconn.query(`DROP TABLE IF EXISTS translations`);
    await taiconn.query(`CREATE EXTENSION IF NOT EXISTS "pgcrypto"`);
    await taiconn.query(`CREATE TABLE IF NOT EXISTS translations(
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        news_id UUID NOT NULL,
        title TEXT NOT NULL,
        subtitle TEXT NOT NULL,
        content TEXT,
        language VARCHAR(50) NOT NULL
        )`);
        
    const insertedTranslations = await Promise.all(
        translations.map(async(t)=>{
        return taiconn.query(`INSERT INTO translations(id,news_id,title,subtitle,content,language) 
            VALUES($1,$2,$3,$4,$5,$6)
            ON CONFLICT (id) DO NOTHING`,
            [t.id,t.news_id,t.title,t.subtitle,t.content,t.language]
        );
        }),
    );
    return insertedTranslations; 
     
 }

  export async function seedAuthors() {
    await taiconn.query(`DROP TABLE IF EXISTS authors`);
    await taiconn.query(`CREATE EXTENSION IF NOT EXISTS "pgcrypto"`);
    await taiconn.query(`CREATE TABLE IF NOT EXISTS authors(
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        name TEXT NOT NULL,
        email TEXT UNIQUE ,
        image_url TEXT,
        biography TEXT)`);
        
    const insertedAuthors = await Promise.all(
        authors.map(async(author)=>{
        return taiconn.query(`INSERT INTO authors(id,name,email,image_url,biography) 
            VALUES($1,$2,$3,$4,$5)
            ON CONFLICT (email) DO NOTHING`,
            [author.id,author.name,author.email,author.image_url,author.biography]
        );
        }),
    );
    return insertedAuthors; 
 }
 export async function seedCategories() {
    await taiconn.query(`DROP TABLE IF EXISTS categories`);
    await taiconn.query(`CREATE EXTENSION IF NOT EXISTS "pgcrypto"`);
    await taiconn.query(`CREATE TABLE IF NOT EXISTS categories(
        category_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        category_name TEXT UNIQUE NOT NULL)`);
        
    const insertedCategories = await Promise.all(
        categories.map(async(category)=>{
        return taiconn.query(`INSERT INTO categories(category_id,category_name) 
            VALUES($1,$2)
            ON CONFLICT (category_id) DO NOTHING`,
            [category.category_id,category.category_name]
        );
        }),
    );
    return insertedCategories; 
 }
 export async function seedSubCategories() {
    await taiconn.query(`DROP TABLE IF EXISTS subcategories`);
    await taiconn.query(`CREATE EXTENSION IF NOT EXISTS "pgcrypto"`);
    await taiconn.query(`CREATE TABLE IF NOT EXISTS subcategories(
        subcategory_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        subcategory_name TEXT NOT NULL,
        category_id  UUID NOT NULL)`);
        
    const insertedSubCategories = await Promise.all(
        subcategories.map(async(subcategory)=>{
        return taiconn.query(`INSERT INTO subcategories(subcategory_id,subcategory_name,category_id) 
            VALUES($1,$2,$3)
            ON CONFLICT (subcategory_id) DO NOTHING`,
            [subcategory.subcategory_id,subcategory.subcategory_name,subcategory.category_id]
        );
        }),
    );
    return insertedSubCategories; 
 }
  export async function seedTags() {
    await taiconn.query(`DROP TABLE IF EXISTS tags`);
    await taiconn.query(`CREATE EXTENSION IF NOT EXISTS "pgcrypto"`);
    await taiconn.query(`CREATE TABLE IF NOT EXISTS tags(
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        name TEXT NOT NULL,
        slug TEXT UNIQUE,
        image_url TEXT)`);
        
    const insertedTags = await Promise.all(
        tags.map(async(tag)=>{
        return taiconn.query(`INSERT INTO tags(name,slug,image_url) 
            VALUES($1,$2,$3)
            ON CONFLICT (slug) DO NOTHING`,
            [tag.name,tag.slug,tag.image_url]
        );
        }),
    );
    return insertedTags; 
 }
 export async function seedNewsTags() {
    await taiconn.query(`DROP TABLE IF EXISTS news_tags`);
    await taiconn.query(`CREATE EXTENSION IF NOT EXISTS "pgcrypto"`);
    await taiconn.query(`CREATE TABLE IF NOT EXISTS news_tags(
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        news_id UUID NOT NULL,
        tag_id UUID NOT NULL)`);
        
    const insertedNewsTags = await Promise.all(
        news_tags.map(async(nt)=>{
        return taiconn.query(`INSERT INTO news_tags(news_id,tag_id) 
            VALUES($1,$2)
            ON CONFLICT (id) DO NOTHING`,
            [nt.news_id,nt.tag_id]
        );
        }),
    );
    return insertedNewsTags; 
 }

 export async function seedQuestions() {
    await taiconn.query(`DROP TABLE IF EXISTS questions`);
    await taiconn.query(`CREATE EXTENSION IF NOT EXISTS "pgcrypto"`);
    await taiconn.query(`CREATE TABLE IF NOT EXISTS questions(
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        qdetail TEXT NOT NULL UNIQUE,
        option1 TEXT NOT NULL,
        option2 TEXT NOT NULL,
        option3 TEXT NOT NULL,
        correct TEXT NOT NULL,
        vote TEXT,
        iscorrect BOOLEAN DEFAULT false,
        voter_name TEXT,
        date_time TIMESTAMP DEFAULT NOW())`);
        
    const insertedQuestions = await Promise.all(
        questions.map(async(quest)=>{
        return taiconn.query(`INSERT INTO questions(qdetail,option1,option2,option3,correct,vote,iscorrect,voter_name,date_time) 
            VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9)
            ON CONFLICT (qdetail) DO NOTHING`,
            [quest.qdetail,quest.option1,quest.option2,quest.option3,quest.correct,quest.vote,quest.iscorrect,quest.voter_name,quest.date_time]
        );
        }),
    );
    return insertedQuestions; 
 }