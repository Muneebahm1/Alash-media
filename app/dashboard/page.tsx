import { Card } from '@/app/ui/dashboard/cards';
import { fetchCardsData } from '@/app/lib/data';
import Table from '@/app/ui/dashboard/table';

// Update the type definition to properly handle searchParams
export default async function page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const awaited = await searchParams;
  const pathName = typeof awaited.pathName === 'string' ? awaited.pathName : '';

  const {
    totalNews,
    totalCat,
    totalTags,
    totalAuthors,
    totalQuestions,
    totalWrong,
    totalRight,
  } = await fetchCardsData();

  return (
    <main>
      <h1 className='mb-2 text-2xl font-bold'>Dashboard</h1>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-14'>
        <Card title="Total News" value={totalNews} />
        <Card title="Categories" value={totalCat} />
        <Card title="Total Tags" value={totalTags} />
        <Card title="Authors" value={totalAuthors} />
        <Card title="Questions" value={totalQuestions} />
        <Card title="Wrong Votes" value={totalWrong} />
        <Card title="Correct Votes" value={totalRight} />
      </div>
      <h2 className='mt-8 mb-2 text-lg font-bold'>Latest 5 Articles </h2>
      <div>
        <Table pathName={pathName} />
      </div>
    </main>
  );
}



