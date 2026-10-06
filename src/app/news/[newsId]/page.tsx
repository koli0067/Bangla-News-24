import Image from "next/image";

interface INewsPageProps {
  params: Promise<{
    newsId: string;
  }>;
}

const NewsPage = async ({ params }: INewsPageProps) => {
  const { newsId } = await params;

  const res = await fetch(`https://news-api-v2.vercel.app/api/article/${newsId}`);
  const data = await res.json();
  const news = data.data;
 console.log(news);
 
  return (
    <div className="max-w-7xl mx-auto py-5">
      <h2 className="text-2xl font-bold">{news.title}</h2>
      <Image 
        src={news.imageUrl} 
        alt={news.title} 
        width={800} 
        height={450} 
        className="rounded-lg my-4"
      />
      
      <p>{news.text}</p>
    </div>
  );
};

export default NewsPage;