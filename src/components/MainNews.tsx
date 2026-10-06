
import Image from "next/image";
import Link from "next/link";

interface INews {
    id: string,
    title: string,
    category: string,
    description: string,
    imageUrl: string,
    imageAlt: string
}


const MainNews = ({news}:{news:INews[]}) => {
   const [firstNews, ...otherNews] = news;
    
  return (

    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        <Link href={`/news/${firstNews.id}`}>
            <div className="card bg-base-100 shadow-sm">
            <figure>
            <Image
            width={600}
            height={600}
            src={firstNews.imageUrl} alt={firstNews.imageAlt}/>
            </figure>
            <div className="card-body">
                <p className="text-red-600 font-semibold ">{firstNews.category}</p>
                <h1 className="text-[18px]">{firstNews.title}</h1>
                <p>{firstNews.description}</p>
            </div>
        </div>
        </Link>


        <div>
            {
                otherNews.slice(0,4).map(others =>
                
                <Link key={others.id} href={`/news/${others.id}`}>
                 <div className="border border-gray-200 px-4 py-5">
                    <p className="text-red-600 text-[14px] font-semibold">{others.category}</p>
                    <h2 className="text-[18px] font-semibold">{others.title}</h2>
                </div>

                </Link>
                
                )
            }
        </div>

    </div>
    
  )
}

export default MainNews