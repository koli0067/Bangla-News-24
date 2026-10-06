import Image from "next/image";
import Link from "next/link";

// interface News{
//     id: string,
//     title: string,
//     description: string,
//     imageUrl: string,
//     imageAlt: string,
//     category: string
//   }

interface News {
  id: string;
  title: string;
  description?: string;
  imageUrl?: string;
  imageAlt?: string;
  category?: string;
}

const NewsCards = ({news}: {news:News}) => {
    
  return (
    <Link href={`/news/${news.id}`}>
         <div className="card bg-base-100 shadow-sm">
            <figure>
            {news.imageUrl && (
            <Image
              width={600}
              height={400}
              src={news.imageUrl}
              alt={news.imageAlt || news.title || "News Image"}
              className="w-full h-full object-cover"
            />
          )}
            </figure>
            <div className="card-body">
                <p className="text-red-600 font-semibold ">{news.category}</p>
                <h1 className="text-2xl">{news.title}</h1>
                <p>{news.description}</p>
            </div>
        </div>
    </Link>
  )
}

export default NewsCards