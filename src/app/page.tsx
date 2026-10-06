import MainNews from "@/components/MainNews";
import MostRead from "@/components/MostRead";
import NewsCards from "@/components/NewsCards";


interface IOtherSections {
  curationId:string,
  title:string,
  articles:{
    id: string,
    title: string,
    description: string,
    imageUrl: string,
    imageAlt: string,
    category: string
  }[];

};


export default async function Home() {

  const res = await fetch('https://news-api-v2.vercel.app/api/news/sections');
  const data = await res.json();
  const sections:IOtherSections[] = data.data;
  const mainNews = sections[0].articles;

  const othersSections:IOtherSections[] = sections.slice(1);
  

  return (

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 max-w-7xl mx-auto mt-10">

        <div className="lg:col-span-2">

            <MainNews news = {mainNews}></MainNews>

           <div className="grid gap-5 mt-5">
             {
              othersSections.map(os => <div
              key={os.curationId}>
                <h1 className="font-bold text-2xl border-b-2 border-red-600">{os.title}</h1>

                <div className="grid mt-3 grid-cols-3 gap-3">
                  {
                    os.articles.map(news =>
                      <NewsCards key={news.id} news={news}></NewsCards>)
                  }
                </div>
              </div> )
            }
           </div>
        </div>

        <div className="lg:col-span-1">

          <MostRead></MostRead>

        </div>
      </div>
 
  );
}
