import Image from 'next/image';
import Link from 'next/link';
import { fetchCurrenthNews } from '@/app/lib/data';

export const Relatednews = async ({ lang = '' }: { lang?: string }) => {
  const items = await fetchCurrenthNews(lang || '');
  return (
    <section className="max-w-screen-xl mx-auto px-4">
      <div className="bg-white p-5 rounded">
        <h2 className="text-2xl font-bold mb-3">Related News</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {items.rows.map((n: any) => (
            <Link key={n.id} href={`/newsdetail/${n.slug}`}>
              <div className="overflow-hidden">
                <Image
                  src={n.image_url || '/logo.png'}
                  alt={n.title}
                  width={300}
                  height={180}
                  className="w-full h-40 object-cover rounded hover:scale-105 transition-transform duration-700"
                />
                <p className="mt-2 text-sm font-semibold line-clamp-2">{n.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
