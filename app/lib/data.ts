import {taiconn} from '@/app/lib/db';

const ITEMS_PER_PAGE = 4;
const AUTHORS_PER_PAGE = 30;

export async function fetchTrendingTopics() {
    const trendingTopics = await taiconn.query(`SELECT id,name,image_url AS image_path
        FROM tags
        ORDER BY name
        LIMIT 7`);
    return trendingTopics;
}
export async function fetchAllTopics() {
    const allTopics = await taiconn.query(`SELECT id,name,image_url AS image_path
        FROM tags
        ORDER BY name`);
    return allTopics;
}

export async function fetchTrendingNews(tagname:string,lang:string) {
    let trendArticles = null;
    console.log(`tagName:${tagname}`);
    if (lang === 'kk') {
        trendArticles = await taiconn.query(`SELECT n.id as id,tr.title as title,n.slug as slug,n.section as section,
        n.image_url,n.date_time::text as date_time,n.view_count as view_count,n.read_time as read_time 
        FROM translations tr JOIN news n ON tr.news_id = n.id
        JOIN news_tags nt ON nt.news_id = n.id
        JOIN tags t ON t.id = nt.tag_id
        WHERE t.name = '${tagname}' and tr.language = 'kk' 
        ORDER BY n.date_time DESC
        LIMIT 8`);
    }
    else if (lang === 'ru') {
        trendArticles = await taiconn.query(`SELECT n.id as id,tr.title as title,n.slug as slug,n.section as section,
        n.image_url,n.date_time::text as date_time,n.view_count as view_count,n.read_time as read_time 
        FROM translations tr JOIN news n ON tr.news_id = n.id
        JOIN news_tags nt ON nt.news_id = n.id
        JOIN tags t ON t.id = nt.tag_id
        WHERE t.name = '${tagname}' and tr.language = 'ru' 
        ORDER BY n.date_time DESC
        LIMIT 8`);
    }
    else {
                        
        console.log(`TagidinTrendFetch:${tagname}`);
        trendArticles = await taiconn.query(`SELECT n.id as id,n.title as title,n.slug as slug,
        n.image_url,n.date_time::text as date_time,n.view_count as view_count,n.read_time as read_time 
        FROM news n JOIN news_tags nt ON n.id = nt.news_id
        JOIN tags t ON t.id = nt.tag_id
        WHERE t.name = '${tagname}' 
        ORDER BY n.date_time DESC
        LIMIT 8`);
    }
    
    //console.log(`tag_idinTrendFetch:${trendArticles.rows[0].tagid}`);
    return trendArticles;
}

export async function fetchHighlights(lan: string,section?: string) {
    console.log(section);
    let highlights = null;
    if (lan === 'kk') {
        highlights = await taiconn.query(`SELECT n.id as id,tr.title as title,n.slug as slug,n.section as section,
        n.image_url,n.date_time::text as date_time 
        FROM translations tr JOIN news n ON tr.news_id = n.id
        WHERE n.section = 'Highlights' and tr.language = 'kk'
        ORDER BY n.date_time DESC
        LIMIT 4`);
    }
    else if (lan === 'ru') {
        highlights = await taiconn.query(`SELECT n.id as id,tr.title as title,n.slug as slug,n.section as section,
        n.image_url,n.date_time::text as date_time 
        FROM translations tr JOIN news n ON tr.news_id = n.id
        WHERE n.section = 'Highlights' and tr.language = 'ru'
        ORDER BY n.date_time DESC
        LIMIT 4`);
    }
    else {
        highlights = await taiconn.query(`SELECT news.id as id,news.title as title,news.slug as slug,news.section as section,
        news.image_url,news.date_time::text as date_time FROM news
        WHERE news.section = 'Highlights'
        ORDER BY news.date_time DESC
        LIMIT 4`);
    }
    
    return highlights;
}

/***********************************  Views Count ****************************/
export async function countViews(slug:string) {        
    try {
                
        const updateViews = await taiconn.query(`UPDATE news
            SET view_count = COALESCE(view_count, 0) + 1
            WHERE slug = $1`,
            [slug]            
            );
        
            return {updateViews};
                       
        }
    catch (error) {
        console.error('Database Error:', error);
        throw new Error("Failed to update views count");
    }
}


export async function fetchcurrentMainhNews(lan: string) {
    let currentMainArticles = null;    
    if (lan === 'kk') {
        currentMainArticles = await taiconn.query(`SELECT n.id as id,tr.title as title,tr.subtitle as subtitle,n.slug as slug,n.section as section,
        n.image_url,n.date_time::text as date_time,n.view_count as view_count,n.read_time as read_time 
        FROM translations tr JOIN news n ON tr.news_id = n.id
        WHERE n.section = 'Hero Top News' and tr.language = 'kk'
        ORDER BY n.date_time DESC
        LIMIT 1`);
    }
    else if (lan === 'ru') {
        currentMainArticles = await taiconn.query(`SELECT n.id as id,tr.title as title,tr.subtitle as subtitle,n.slug as slug,n.section as section,
        n.image_url,n.date_time::text as date_time,n.view_count as view_count,n.read_time as read_time 
        FROM translations tr JOIN news n ON tr.news_id = n.id
        WHERE n.section = 'Hero Top News' and tr.language = 'ru'
        ORDER BY n.date_time DESC
        LIMIT 1`);
    }
    else {
        currentMainArticles = await taiconn.query(`SELECT news.id as id,news.title as title,news.subtitle as subtitle,news.slug as slug,news.section as section,
        news.image_url,news.date_time::text as date_time,news.view_count as view_count,news.read_time as read_time FROM news 
        WHERE news.section = 'Hero Top News'
        ORDER BY news.date_time DESC
        LIMIT 1`);
    }
        
    return currentMainArticles;
}
export async function fetchCurrenthNews(lan:string) {
    let currentArticles = null;
    if (lan === 'kk') {
        currentArticles = await taiconn.query(`SELECT n.id as id,tr.title as title,n.slug as slug,n.section as section,
        n.image_url,n.date_time::text as date_time,n.view_count as view_count,n.read_time as read_time 
        FROM translations tr JOIN news n ON tr.news_id = n.id
        WHERE n.section = 'Top News' and tr.language = 'kk' 
        ORDER BY n.date_time DESC
        LIMIT 8`);
    }
    else if (lan === 'ru') {
        currentArticles = await taiconn.query(`SELECT n.id as id,tr.title as title,n.slug as slug,n.section as section,
        n.image_url,n.date_time::text as date_time,n.view_count as view_count,n.read_time as read_time 
        FROM translations tr JOIN news n ON tr.news_id = n.id
        WHERE n.section = 'Top News' and tr.language = 'ru' 
        ORDER BY n.date_time DESC
        LIMIT 8`);
    }
    else {
        currentArticles = await taiconn.query(`SELECT news.id as id,news.title as title,news.slug as slug,news.section as section,
        news.image_url,news.date_time::text as date_time,news.view_count as view_count,news.read_time as read_time FROM news
        WHERE news.section = 'Top News' 
        ORDER BY news.date_time DESC
        LIMIT 8`);
    }
        
    return currentArticles;
}

export async function fetchCardsData() {
    
    try {
        const [ countNews,countCat,countTags,countAuthors,countQuestions,countWrong,countRight] = await Promise.all(
            [taiconn.query(`SELECT count(*) FROM news`),
            taiconn.query(`SELECT count(*) FROM categories`),
            taiconn.query(`SELECT count(*) FROM tags`),
            taiconn.query(`SELECT count(*) FROM authors`),
            taiconn.query(`SELECT count(*) FROM questions`),
            taiconn.query(`SELECT count(*) FROM questions WHERE iscorrect = false`),
            taiconn.query(`SELECT count(*) FROM questions WHERE iscorrect = true`)]
            
        );
        return {
            totalNews: parseInt(countNews.rows[0].count),
            totalCat: parseInt(countCat.rows[0].count),
            totalTags: parseInt(countTags.rows[0].count),
            totalAuthors: parseInt(countAuthors.rows[0].count),
            totalQuestions: parseInt(countQuestions.rows[0].count),
            totalWrong: parseInt(countWrong.rows[0].count),
            totalRight: parseInt(countRight.rows[0].count),
        }
        //OFFSET = how many first rows to skip : means OFFSET=20 first 20 rows skip 21-30 will be fetched
        //ILIKE for search "Case-Insensitive" which is not in ms-sql server
        //[`%${query}%`, `%${query}%`,`%${query}%`,`%${query}%`,ITEMS_PER_PAGE, offset]

    }
    catch(error) {
        console.log('Database Error:',error);
        throw new Error('Failed to fetch totals');
    }
}

export async function fetchLatestArticles() {
    const latestArticles = await taiconn.query(`SELECT news.id as id,authors.name as author_name,news.title as title,news.section as section,
        news.image_url,news.date_time::text as date_time FROM news JOIN authors ON news.author_id = authors.id
        ORDER BY news.date_time DESC
        LIMIT 5`);
    return latestArticles;
}

export async function fetchLatestNews(lang: string) {
    let latestNews = null;
    if (lang === 'kk') {
        latestNews = await taiconn.query(`SELECT news.id as id,authors.name as author_name,tr.title as title,news.slug as slug,news.section as section,
            news.image_url,news.date_time::text as date_time 
            FROM news JOIN authors ON news.author_id = authors.id
            JOIN translations tr ON news.id = tr.news_id
            WHERE news.section = 'Latest News' and tr.language = 'kk'
            ORDER BY news.date_time DESC
            LIMIT 2`);
    }
    else if (lang === 'ru') {
        latestNews = await taiconn.query(`SELECT news.id as id,authors.name as author_name,tr.title as title,news.slug as slug,news.section as section,
            news.image_url,news.date_time::text as date_time 
            FROM news JOIN authors ON news.author_id = authors.id
            JOIN translations tr ON news.id = tr.news_id
            WHERE news.section = 'Latest News' and language = 'ru'
            ORDER BY news.date_time DESC
            LIMIT 2`);   
    }
    else {
        latestNews = await taiconn.query(`SELECT news.id as id,authors.name as author_name,news.title as title,news.slug as slug,news.section as section,
            news.image_url,news.date_time::text as date_time 
            FROM news JOIN authors ON news.author_id = authors.id
            WHERE news.section = 'Latest News'
            ORDER BY news.date_time DESC
            LIMIT 2`);    
    }

    return latestNews;
}

export async function fetchSeeLatestNews(lang: string) {
    let latestNews = null;
    if (lang === 'kk') {
        latestNews = await taiconn.query(`SELECT news.id as id,authors.name as author_name,tr.title as title,news.slug as slug,news.section as section,
            news.image_url,news.date_time::text as date_time 
            FROM news JOIN authors ON news.author_id = authors.id
            JOIN translations tr ON news.id = tr.news_id
            WHERE news.section = 'Latest News' and tr.language = 'kk'
            ORDER BY news.date_time DESC
            OFFSET 2 LIMIT 3`);
    }
    else if (lang === 'ru') {
        latestNews = await taiconn.query(`SELECT news.id as id,authors.name as author_name,tr.title as title,news.slug as slug,news.section as section,
            news.image_url,news.date_time::text as date_time 
            FROM news JOIN authors ON news.author_id = authors.id
            JOIN translations tr ON news.id = tr.news_id
            WHERE news.section = 'Latest News' and language = 'ru'
            ORDER BY news.date_time DESC
            OFFSET 2 LIMIT 3`);   
    }
    else {
        latestNews = await taiconn.query(`SELECT news.id as id,authors.name as author_name,news.title as title,news.slug as slug,news.section as section,
            news.image_url,news.date_time::text as date_time 
            FROM news JOIN authors ON news.author_id = authors.id
            WHERE news.section = 'Latest News'
            ORDER BY news.date_time DESC
            OFFSET 2 LIMIT 3`);    
    }

    return latestNews;
}

export async function fetchMostReadNews(lang: string) {
    let mostReadNews = null;
    if (lang === 'kk') {
        mostReadNews = await taiconn.query(`SELECT news.id as id,authors.name as author_name,tr.title as title,news.slug as slug,news.section as section,
        news.date_time::text as date_time 
        FROM news JOIN authors ON news.author_id = authors.id
        JOIN translations tr ON news.id = tr.news_id
        WHERE news.section = 'Most Read News' and tr.language = 'kk'
        ORDER BY news.date_time DESC
        LIMIT 5`);
    }
    else if (lang === 'ru') {
        mostReadNews = await taiconn.query(`SELECT news.id as id,authors.name as author_name,tr.title as title,news.slug as slug,news.section as section,
        news.date_time::text as date_time 
        FROM news JOIN authors ON news.author_id = authors.id
        JOIN translations tr ON news.id = tr.news_id
        WHERE news.section = 'Most Read News' and tr.language = 'ru'
        ORDER BY news.date_time DESC
        LIMIT 5`);
    }
    else {
        mostReadNews = await taiconn.query(`SELECT news.id as id,authors.name as author_name,news.title as title,news.slug as slug,news.section as section,
        news.date_time::text as date_time FROM news JOIN authors ON news.author_id = authors.id
        WHERE news.section = 'Most Read News'
        ORDER BY news.date_time DESC
        LIMIT 5`);
    }
    
    return mostReadNews;
}

export async function fetchLatestQuestions() {
    
    try {
        const latestQuestion = await taiconn.query(`SELECT id,qdetail,option1,option2,option3,
        correct,vote,iscorrect,voter_name FROM questions
        ORDER BY date_time desc
        LIMIT 1`
        );
        return latestQuestion;
    
    }
    catch(error) {
        console.log('Database Error:',error);
        throw new Error('Failed to fetch latest question');
    }
    
}

export async function fetchCategoryMain(lang: string) {
    let categoryMain = null;
    if (lang === 'kk' || lang === 'ru') {
        categoryMain = await taiconn.query(`SELECT news.id,tr.title,
        news.image_url,news.section,news.slug,news.date_time::text as date_time,categories.category_name,
        news.view_count as view_count 
        FROM news JOIN categories ON news.category_id = categories.category_id 
        JOIN translations tr ON news.id = tr.news_id
        WHERE news.section = 'Categories' and tr.language = '${lang}'
        ORDER BY news.date_time DESC
        LIMIT 6`);
    }
    else {
        categoryMain = await taiconn.query(`SELECT news.id,news.title,
        news.image_url,news.section,news.slug,news.date_time::text as date_time,categories.category_name,
        news.view_count as view_count FROM news JOIN categories ON news.category_id = categories.category_id 
        WHERE news.section = 'Categories'
        ORDER BY news.date_time DESC
        LIMIT 6`);
    }
     
    return categoryMain;
}
export async function fetchMultimediaMain(lang: string) {
    let multimediaMain = null;
    if (lang === 'kk' || lang === 'ru') {
        multimediaMain = await taiconn.query(`SELECT news.id,tr.title,news.slug,news.section,
        news.image_url,news.date_time::text,news.view_count 
        FROM news JOIN translations tr ON news.id = tr.news_id
        WHERE news.section = 'Multimedia' and tr.language = '${lang}'
        ORDER BY news.date_time DESC
        LIMIT 6`);
    }
    else {
        multimediaMain = await taiconn.query(`SELECT news.id,news.title,news.slug,news.section,
        news.image_url,news.date_time::text,news.view_count 
        FROM news 
        WHERE news.section = 'Multimedia' 
        ORDER BY news.date_time DESC
        LIMIT 6`);
    }
    
    return multimediaMain;
}
export async function fetchInterviewMain(lang: string) {
    let interviewMain = null;
    if (lang === 'kk' || lang === 'ru') {
        interviewMain = await taiconn.query(`SELECT news.id as id,tr.title as title,tr.subtitle as subtitle,news.slug as slug,news.section as section,
        news.image_url,news.date_time::text as date_time,news.view_count as view_count 
        FROM news JOIN translations tr ON news.id = tr.news_id
        WHERE news.section = 'Interview' and tr.language = '${lang}'
        ORDER BY news.date_time DESC
        LIMIT 6`);
    }
    else {
        interviewMain = await taiconn.query(`SELECT news.id as id,news.title as title,news.subtitle as subtitle,news.slug as slug,news.section as section,
        news.image_url,news.date_time::text as date_time,news.view_count as view_count 
        FROM news
        WHERE news.section = 'Interview' 
        ORDER BY news.date_time DESC
        LIMIT 6`);
    }
    
    return interviewMain;
}
export async function fetchAuthorsMain(lang: string) {
    let authorsMain = null;
    if (lang === 'kk' || lang === 'ru') {
        authorsMain = await taiconn.query(`SELECT news.id as id,news.slug as slug,news.section as section,authors.name as author_name,news.image_url as image_url,
        authors.biography as biography 
        FROM news JOIN authors ON news.author_id = authors.id
        JOIN translations tr ON news.id = tr.news_id
        WHERE news.section = 'Authors' and tr.language = '${lang}'
        ORDER BY authors.name 
        LIMIT 4`);
    }
    else {
        authorsMain = await taiconn.query(`SELECT news.id as id,news.slug as slug,news.section as section,authors.name as author_name,news.image_url as image_url,
        authors.biography as biography FROM news JOIN authors ON news.author_id = authors.id
        WHERE news.section = 'Authors'
        ORDER BY authors.name 
        LIMIT 4`);
    }

    
    return authorsMain;
}

/*************************   Fetch for Category Pages links of main page****************** */
export async function fetchCategoryNews(category: string,lang: string) {
    let categoryNews = null;
    if (lang === 'kk' || lang === 'ru') {
        categoryNews = await taiconn.query(`SELECT n.id as id,tr.title as title,n.slug as slug,n.section as section,c.category_name as category_name,
        sc.subcategory_name as subcategory_name,n.image_url as image_url,
        n.date_time::text as date_time 
        FROM news n JOIN categories c ON n.category_id = c.category_id
        JOIN subcategories sc ON n.subcategory_id = sc.subcategory_id
        JOIN translations tr ON n.id = tr.news_id
        WHERE c.category_name = $1 and tr.language = $2
        ORDER BY n.date_time DESC
        LIMIT 4`,
        [`${category}`,`${lang}`]);
    }
    else {
        categoryNews = await taiconn.query(`SELECT n.id as id,n.title as title,n.slug as slug,n.section as section,c.category_name as category_name,
        sc.subcategory_name as subcategory_name,n.image_url as image_url,
        n.date_time::text as date_time FROM news n JOIN categories c ON n.category_id = c.category_id
        JOIN subcategories sc ON n.subcategory_id = sc.subcategory_id
        WHERE c.category_name = $1
        ORDER BY n.date_time DESC
        LIMIT 4`,
        [`${category}`]);
    }
    
    return categoryNews;
}

export async function fetchSubCategoryNews(category: string,subCategory:string,lang: string) {
    let categoryNews = null;
    if (lang === 'kk' || lang === 'ru') {
        categoryNews = await taiconn.query(`SELECT n.id as id,n.title as title,n.slug as slug,n.section as section,c.category_name as category_name,
        sc.subcategory_name as subcategory_name,n.image_url as image_url,
        n.date_time::text as date_time 
        FROM news n JOIN categories c ON n.category_id = c.category_id
        JOIN subcategories sc ON n.subcategory_id = sc.subcategory_id
        JOIN translations tr ON n.id = tr.news_id
        WHERE c.category_name = $1 and sc.subcategory_name = $2 and tr.language = $3
        ORDER BY n.date_time DESC
        LIMIT 4`,
        [`${category}`,`${subCategory}`,`${lang}`]);
    }
    else {
        categoryNews = await taiconn.query(`SELECT n.id as id,n.title as title,n.slug as slug,n.section as section,c.category_name as category_name,
        sc.subcategory_name as subcategory_name,n.image_url as image_url,
        n.date_time::text as date_time FROM news n JOIN categories c ON n.category_id = c.category_id
        JOIN subcategories sc ON n.subcategory_id = sc.subcategory_id
        WHERE c.category_name = $1 and sc.subcategory_name = $2
        ORDER BY n.date_time DESC
        LIMIT 4`,
        [`${category}`,`${subCategory}`]);
    }
    
    return categoryNews;
}

export async function fetchAllSubCategoriesNews(subCategory:string,lang: string) {
    let categoryNews = null;
    if (lang === 'kk' || lang === 'ru') {
        categoryNews = await taiconn.query(`SELECT n.id as id,n.title as title,n.slug as slug,n.section as section,
        sc.subcategory_name as subcategory_name,n.image_url as image_url,
        n.date_time::text as date_time 
        FROM news n JOIN subcategories sc ON n.subcategory_id = sc.subcategory_id
        JOIN translations tr ON n.id = tr.news_id
        WHERE sc.subcategory_name = $1 and tr.language = $2
        ORDER BY n.date_time DESC
        LIMIT 4`,
        [`${subCategory}`,`${lang}`]);
    }
    else {
        categoryNews = await taiconn.query(`SELECT n.id as id,n.title as title,n.slug as slug,n.section as section,
        sc.subcategory_name as subcategory_name,n.image_url as image_url,
        n.date_time::text as date_time FROM news n JOIN subcategories sc ON n.subcategory_id = sc.subcategory_id
        WHERE sc.subcategory_name = $1
        ORDER BY n.date_time DESC
        LIMIT 4`,
        [`${subCategory}`]);
    }
    
    return categoryNews;
}

export async function fetchAuthorsList(
  query: string,
  currentPage: number,
) {
    const offset = (currentPage - 1) * AUTHORS_PER_PAGE;
    try {
        const searchAuthorsList = await taiconn.query(`SELECT id,name,email,image_url,
        biography FROM authors
        WHERE name ILIKE $1 OR email ILIKE $2 OR image_url ILIKE $3 OR biography ILIKE $4
        ORDER BY name
        LIMIT $5 OFFSET $6`,
        [`%${query}%`,`%${query}%`,`%${query}%`,`%${query}%`,AUTHORS_PER_PAGE,offset]
        );

        return searchAuthorsList;
        //OFFSET = how many first rows to skip : means OFFSET=20 first 20 rows skip 21-30 will be fetched
        //ILIKE for search "Case-Insensitive" which is not in ms-sql server
        //[`%${query}%`, `%${query}%`,`%${query}%`,`%${query}%`,ITEMS_PER_PAGE, offset]

    }
    catch(error) {
        console.log('Database Error:',error);
        throw new Error('Failed to fetch authors');
    }
    
}

export async function fetchLetterAuthorsList(
  query: string,
  currentPage: number,
) {
    const offset = (currentPage - 1) * AUTHORS_PER_PAGE;
    try {
        const searchLetterAuthorsList = await taiconn.query(`SELECT id,name,email,image_url,
        biography FROM authors
        WHERE name ILIKE $1
        ORDER BY name
        LIMIT $2 OFFSET $3`,
        [`${query}%`,AUTHORS_PER_PAGE,offset]
        );

        return searchLetterAuthorsList;
        //OFFSET = how many first rows to skip : means OFFSET=20 first 20 rows skip 21-30 will be fetched
        //ILIKE for search "Case-Insensitive" which is not in ms-sql server
        //[`%${query}%`, `%${query}%`,`%${query}%`,`%${query}%`,ITEMS_PER_PAGE, offset]

    }
    catch(error) {
        console.log('Database Error:',error);
        throw new Error('Failed to fetch authors');
    }
    
}

export async function fetchAuthorsListPages(query: string) {
  try {
    const pageCount = await taiconn.query(`SELECT COUNT(*)
    FROM authors 
    WHERE name ILIKE $1 OR email ILIKE $2 OR image_url ILIKE $3
        OR biography ILIKE $4`,
    [`%${query}%`,`%${query}%`,`%${query}%`,`%${query}%`]
    );

    const totalPages = Math.ceil(Number(pageCount.rows[0].count) / AUTHORS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total Authors.');
  }
}

/************************ Data fetching of Search of main and admin***************************/
export async function fetchSearchContent(
  query: string,
  currentPage: number,
) {
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;
    try {
        const centents = await taiconn.query(`SELECT news.id,news.title as title,news.subtitle as subtitle,news.image_url as image_url,
        news.content as content,news.date_time::text as date_time FROM news
        WHERE news.title ILIKE $1 OR news.content ILIKE $2 OR news.content ILIKE $3
        OR news.date_time::text ILIKE $4
        ORDER BY news.date_time DESC
        LIMIT $5 OFFSET $6`,
        [`%${query}%`,`%${query}%`,`%${query}%`,`%${query}%`,ITEMS_PER_PAGE,offset]
        );

        return centents;
        //OFFSET = how many first rows to skip : means OFFSET=20 first 20 rows skip 21-30 will be fetched
        //ILIKE for search "Case-Insensitive" which is not in ms-sql server
        //[`%${query}%`, `%${query}%`,`%${query}%`,`%${query}%`,ITEMS_PER_PAGE, offset]

    }
    catch(error) {
        console.log('Database Error:',error);
        throw new Error('Failed to fetch articles');
    }
    
}

export async function fetchSearchArticles(
  query: string,
  currentPage: number,
) {
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;
    try {
        const articles = await taiconn.query(`SELECT news.id as id,authors.name as author_name,news.title as title,news.section as section,
        news.category_id,news.subcategory_id,news.image_url,news.date_time::text as date_time FROM news JOIN authors ON news.author_id = authors.id
        WHERE authors.name ILIKE $1 OR news.title ILIKE $2 OR news.section ILIKE $3
        OR news.date_time::text ILIKE $4
        ORDER BY news.date_time DESC
        LIMIT $5 OFFSET $6`,
        [`%${query}%`,`%${query}%`,`%${query}%`,`%${query}%`,ITEMS_PER_PAGE,offset]
        );

        return articles;
        //OFFSET = how many first rows to skip : means OFFSET=20 first 20 rows skip 21-30 will be fetched
        //ILIKE for search "Case-Insensitive" which is not in ms-sql server
        //[`%${query}%`, `%${query}%`,`%${query}%`,`%${query}%`,ITEMS_PER_PAGE, offset]

    }
    catch(error) {
        console.log('Database Error:',error);
        throw new Error('Failed to fetch articles');
    }
    
}

/************************ Data fetching of Categories and Sub-Categories***********************/
export async function fetchSearchCategories(
  query: string,
  currentPage: number,
) {
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;
    try {
        const categories = await taiconn.query(`SELECT categories.category_id,categories.category_name,subcategories.subcategory_name
        FROM categories JOIN subcategories ON categories.category_id = subcategories.category_id
        WHERE categories.category_name ILIKE $1 OR subcategories.subcategory_name ILIKE $2
        ORDER BY categories.category_name
        LIMIT $3 OFFSET $4`,
        [`%${query}%`,`%${query}%`,ITEMS_PER_PAGE,offset]
        );

        return categories;
        //OFFSET = how many first rows to skip : means OFFSET=20 first 20 rows skip 21-30 will be fetched
        //ILIKE for search "Case-Insensitive" which is not in ms-sql server
        //[`%${query}%`, `%${query}%`,`%${query}%`,`%${query}%`,ITEMS_PER_PAGE, offset]

    }
    catch(error) {
        console.log('Database Error:',error);
        throw new Error('Failed to fetch categories');
    }
    
}

/****************************   Fetch Total Search Site Content Pages **************************/
export async function fetchSearchContentPages(query: string) {
  try {
    const pageCount = await taiconn.query(`SELECT COUNT(*)
    FROM news 
        WHERE news.title ILIKE $1 OR news.content ILIKE $2
        OR news.date_time::text ILIKE $3`,
    [`%${query}%`,`%${query}%`,`%${query}%`]
    );
    
    const totalPages = Math.ceil(Number(pageCount.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total Articles.');
  }
}
/****************************   Fetch Total Pages **************************/
export async function fetchArticlesPages(query: string) {
  try {
    const pageCount = await taiconn.query(`SELECT COUNT(*)
    FROM news JOIN authors ON news.author_id = authors.id
        WHERE authors.name ILIKE $1 OR news.title ILIKE $2 OR news.section ILIKE $3
        OR news.section::text ILIKE $4`,
    [`%${query}%`,`%${query}%`,`%${query}%`,`%${query}%`]
    );

    const totalPages = Math.ceil(Number(pageCount.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total Articles.');
  }
}

export async function fetchAuthorsPages(query: string) {
  try {
    const pageCount = await taiconn.query(`SELECT COUNT(*)
    FROM authors 
    WHERE name ILIKE $1 OR email ILIKE $2 OR image_url ILIKE $3
        OR biography ILIKE $4`,
    [`%${query}%`,`%${query}%`,`%${query}%`,`%${query}%`]
    );

    const totalPages = Math.ceil(Number(pageCount.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total Authors.');
  }
}

export async function fetchCategoryPages(query: string) {
  try {
    const pageCount = await taiconn.query(`SELECT COUNT(*)
    FROM categories JOIN subcategories ON categories.category_id = subcategories.category_id
        WHERE categories.category_name ILIKE $1 OR subcategories.subcategory_name ILIKE $2`,
    [`%${query}%`,`%${query}%`]
    );

    const totalPages = Math.ceil(Number(pageCount.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total Categories.');
  }
}

export async function fetchTagsPages(query: string) {
  try {
    const pageCount = await taiconn.query(`SELECT COUNT(*)
    FROM tags 
    WHERE name ILIKE $1 OR image_url ILIKE $2`,
    [`%${query}%`,`%${query}%`]
    );

    const totalPages = Math.ceil(Number(pageCount.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total Tags.');
  }
}

export async function fetchQuestionsPages(query: string) {
  try {
    const pageCount = await taiconn.query(`SELECT COUNT(*)
    FROM questions 
    WHERE qdetail ILIKE $1 OR correct ILIKE $2 OR vote ILIKE $3
        OR voter_name ILIKE $4`,
    [`%${query}%`,`%${query}%`,`%${query}%`,`%${query}%`]
    );

    const totalPages = Math.ceil(Number(pageCount.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total Questions.');
  }
}

    /******************  End of Fetching Total Pages ********/
/*********************** End of Articles Fetching******************/

export async function fetchSearchTags(
  query: string,
  currentPage: number,
) {
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;
    try {
        const searchTags = await taiconn.query(`SELECT id,name,image_url AS image_path
        FROM tags
        WHERE name ILIKE $1 OR image_url ILIKE $2
        ORDER BY name
        LIMIT $3 OFFSET $4`,
        [`%${query}%`,`%${query}%`,ITEMS_PER_PAGE,offset]
        );

        return searchTags;
        //OFFSET = how many first rows to skip : means OFFSET=20 first 20 rows skip 21-30 will be fetched
        //ILIKE for search "Case-Insensitive" which is not in ms-sql server
        //[`%${query}%`, `%${query}%`,`%${query}%`,`%${query}%`,ITEMS_PER_PAGE, offset]

    }
    catch(error) {
        console.log('Database Error:',error);
        throw new Error('Failed to fetch tags');
    }
    
}

export async function fetchSearchAuthors(
  query: string,
  currentPage: number,
) {
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;
    try {
        const searchAuthors = await taiconn.query(`SELECT id,name,email,image_url,
        biography FROM authors
        WHERE name ILIKE $1 OR email ILIKE $2 OR image_url ILIKE $3 OR biography ILIKE $4
        ORDER BY name
        LIMIT $5 OFFSET $6`,
        [`%${query}%`,`%${query}%`,`%${query}%`,`%${query}%`,ITEMS_PER_PAGE,offset]
        );

        return searchAuthors;
        //OFFSET = how many first rows to skip : means OFFSET=20 first 20 rows skip 21-30 will be fetched
        //ILIKE for search "Case-Insensitive" which is not in ms-sql server
        //[`%${query}%`, `%${query}%`,`%${query}%`,`%${query}%`,ITEMS_PER_PAGE, offset]

    }
    catch(error) {
        console.log('Database Error:',error);
        throw new Error('Failed to fetch authors');
    }
    
}

export async function fetchSearchQuestions(
  query: string,
  currentPage: number,
) {
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;
    try {
        const searchQuestions = await taiconn.query(`SELECT id,qdetail,option1,option2,option3,
        correct,vote,date_time::text FROM questions
        WHERE qdetail ILIKE $1 OR option1 ILIKE $2 OR option2 ILIKE $3 OR option3 ILIKE $4 
        OR correct ILIKE $5 OR vote ILIKE $6 OR date_time::text ILIKE $7
        ORDER BY qdetail
        LIMIT $8 OFFSET $9`,
        [`%${query}%`,`%${query}%`,`%${query}%`,`%${query}%`,`%${query}%`,`%${query}%`,`%${query}%`,ITEMS_PER_PAGE,offset]
        );

        return searchQuestions;
        

    }
    catch(error) {
        console.log('Database Error:',error);
        throw new Error('Failed to fetch questions');
    }
    
}

/*********************************************  Fetch For Updation *********************************** */

export async function fetchNewsById(newsid: string) {
    try {
        
            const newsById = await taiconn.query(`SELECT news.id as id,news.title as title,news.subtitle as subtitle,authors.name as author_name,
            categories.category_id,categories.category_name,subcategories.subcategory_id,subcategories.subcategory_name,news.section as section,
            news.image_url,news.content as content,news.date_time::text as date_time 
            FROM news JOIN authors ON news.author_id = authors.id
            JOIN categories ON news.category_id = categories.category_id  
            JOIN subcategories ON news.subcategory_id = subcategories.subcategory_id    
            WHERE news.id = '${newsid}'
            ORDER BY news.date_time DESC`
        );    

            const kkNewsById = await taiconn.query(`SELECT news.id as id,tr.title as title,tr.subtitle as subtitle,
            tr.content as content
            FROM translations tr JOIN news ON tr.news_id = news.id
            WHERE news.id = '${newsid}' and tr.language = 'kk'
            `
            );
        
            const ruNewsById = await taiconn.query(`SELECT news.id as id,tr.title as title,tr.subtitle as subtitle,
            tr.content as content
            FROM translations tr JOIN news ON tr.news_id = news.id
            WHERE news.id = '${newsid}' and tr.language = 'ru'
            `
            );

            const tagsById = await taiconn.query(`SELECT news_id,tag_id
            FROM news_tags
            WHERE news_id = '${newsid}'
            `
            );
                               
        return {newsById,kkNewsById,ruNewsById,tagsById};
    
    }
    catch(error) {
        console.log('Database Error:',error);
        throw new Error('Failed to fetch news by id');
    }
    
}

export async function fetchAuthorById(
  id: string,
) {
    
    try {
        const authorById = await taiconn.query(`SELECT id,name,email,image_url,
        biography FROM authors
        WHERE id = '${id}'
        ORDER BY name`
        );
        return authorById;
    
    }
    catch(error) {
        console.log('Database Error:',error);
        throw new Error('Failed to fetch authors by id');
    }
    
}

export async function fetchCategoryById(
  id: string,
) {
    
    try {
        
        const categoryById = await taiconn.query(`SELECT categories.category_id,categories.category_name,subcategories.subcategory_name
        FROM categories JOIN subcategories ON categories.category_id = subcategories.category_id
        WHERE categories.category_id = '${id}'
        ORDER BY categories.category_name`,
        );

        return categoryById;
    }
    catch(error) {
        console.log('Database Error:',error);
        throw new Error('Failed to fetch categories by id');
    }
    
}

export async function fetchTagById(
  id: string,
) {
    
    try {
        const tagById = await taiconn.query(`SELECT id,name,slug,
        image_url FROM tags
        WHERE id = '${id}'
        ORDER BY name`
        );
        return tagById;
    
    }
    catch(error) {
        console.log('Database Error:',error);
        throw new Error('Failed to fetch tags by id');
    }
    
}

export async function fetchQuestionById(
  id: string,
) {
    
    try {
        const questionById = await taiconn.query(`SELECT id,qdetail,option1,option2,option3,
        correct FROM questions
        WHERE id = '${id}'
        ORDER BY qdetail`
        );
        return questionById;
    
    }
    catch(error) {
        console.log('Database Error:',error);
        throw new Error('Failed to fetch questions by id');
    }
    
}



//const title = 'Duis';
export async function fetchPublishedNews(slug:string,lan:string) {
    
    let articles = null;
    
    try {
        if (lan === 'kk') {
            articles = await taiconn.query(`SELECT n.id as id,auth.name as author_name,tr.title as title,tr.subtitle as subtitle,tr.content as content,n.slug as slug,n.image_url as image_path,
            n.section as section,n.view_count,n.date_time::text as date_time 
            FROM translations tr JOIN news n ON tr.news_id = n.id
                JOIN authors auth ON n.author_id = auth.id
            WHERE n.slug = $1 and tr.language = $2`,
            [slug,'kk']
            );
        }
        else if (lan === 'ru') {
            articles = await taiconn.query(`SELECT n.id as id,auth.name as author_name,tr.title as title,tr.subtitle as subtitle,tr.content as content,n.slug as slug,n.image_url as image_path,
            n.section as section,n.view_count,n.date_time::text as date_time 
            FROM translations tr JOIN news n ON tr.news_id = n.id
                JOIN authors auth ON n.author_id = auth.id
            WHERE n.slug = $1 and tr.language = $2`,
            [slug,'ru']
            );
        }
        else {
            articles = await taiconn.query(`SELECT news.id as id,authors.name as author_name,news.title as title,news.subtitle as subtitle,news.content as content,news.slug as slug,news.image_url as image_path,
            news.section as section,news.view_count,news.date_time::text as date_time FROM news JOIN authors ON news.author_id = authors.id
            WHERE news.slug = $1`,
            [slug]
            );
        }
        
                   
        const rcount = Number(articles.rowCount);
        console.log(rcount);
        console.log(`Fetched Title=${slug}`);

        return articles;
    }
    catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch news.');
  }
     
        
} 
     
        



