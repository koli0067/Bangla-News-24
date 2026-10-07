import NewsCards from "@/components/NewsCards";
import { notFound } from "next/navigation";


interface INewsItem {
  id: string;
  title: string;
  description?: string;
  imageUrl?: string;
  category?: string;
}

interface ICategoryParams {
  params: Promise<{
    categoryId:string;
  }>
}

const CategoryNews = async({params}:ICategoryParams) => {
  const {categoryId} = await params;

  const res = await fetch(`https://news-api-v2.vercel.app/api/category/${categoryId}`)
  const data = await res.json();
  const categoryNews:INewsItem[] = data.data;

  if(!categoryNews){
      notFound()
    }

  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-bold border-b-2 border-red-600 mb-10 pb-5">
        {data.title}</h1>
        
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
       {
       categoryNews.map(ctynews => <NewsCards  key={ctynews.id} news={ctynews}></NewsCards>  ) 
      }
     </div>
    </div>
  )
}

export default  CategoryNews