//import { seedUsers,seedNews,seedAuthors,seedCategories,seedSubCategories,seedTags,seedTrnslations,seedNewsTags,seedQuestions } from '@/app/lib/seed';
import { seedUsers, seedNews, seedAuthors, seedCategories, seedSubCategories, seedTags, seedTrnslations, seedNewsTags, seedQuestions } from '@/app/lib/seed';
import { selectUsers, selectNews, selectAuthors, selectTags, selecTranslations, selectNewsTags, selectQuestions } from '@/app/lib/query';

async function run() {
    try{
        await seedUsers();
        await seedNews();
        await seedAuthors();
        await seedCategories();
        await seedSubCategories();
        await seedTags();
        await seedTrnslations();
        await seedNewsTags();
        await seedQuestions();
        console.log('Seeded Data Successfully');
        await selectUsers();
        await selectNews();
        await selectAuthors();
        await selectTags();
        await selecTranslations();
        await selectNewsTags();
        await selectQuestions();
        process.exit(0);
    }
    catch(error) {
        console.log('Failed to Seed Data',error);
        process.exit(1);
    }
}

run();