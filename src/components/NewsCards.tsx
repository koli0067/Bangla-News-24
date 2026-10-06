import Image from "next/image";
import Link from "next/link";

interface News {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  category: string;
}

const NewsCards = ({ news }: { news: News }) => {
  return (
    <Link href={`/news/${news.id}`} className="block h-full">
      <div className="card bg-base-100 shadow-sm h-full flex flex-col justify-between hover:shadow-md transition-shadow">
        <figure className="relative w-full aspect-video overflow-hidden">
          <Image
            width={600}
            height={400}
            src={news.imageUrl}
            alt={news.imageAlt || news.title}
            className="w-full h-full object-cover"
          />
        </figure>
        <div className="card-body p-4 sm:p-5 flex-1 flex flex-col">
          <p className="text-red-600 font-semibold text-xs sm:text-sm">
            {news.category}
          </p>
          <h1 className="text-lg sm:text-xl font-bold line-clamp-2 mt-1 mb-2">
            {news.title}
          </h1>
          <p className="text-sm text-gray-600 line-clamp-3">
            {news.description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default NewsCards;