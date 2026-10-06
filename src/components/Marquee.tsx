import Link from "next/link";
import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"

interface IHeadlines {
    id: string,
    title: string
}


const Marquee = async() => {
    const res = await fetch('https://news-api-v2.vercel.app/api/news?limit=10');
    const data = await res.json();
    const headlines:IHeadlines[] = data.data;
    console.log(headlines);
    
  return (
    <div className="bg-red-700 text-white text-[17px] mb-8">
        <div className="flex max-w-7xl mx-auto">
            <h2 className="bg-red-800 py-2 px-5 font-bold">সর্বশেষ</h2>
        
        <MarqueeText className="py-2" direction="right" duration={10}>
        {
            headlines.map(h =>
            
            <Link className="hover:underline" key={h.id} href={`/news/${h.id}`}>
              <span>
                <span>{h.title}</span>
                <span className="mx-5">•</span>
            </span>
            </Link>
            
        )
        } 
        </MarqueeText>
        </div>
    </div>
  )
}

export default Marquee