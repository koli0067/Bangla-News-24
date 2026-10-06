import Link from "next/link";


interface INavs {
    slug: string,
    title: string,
    topicId: string | null,
    url: string,
    scrapable: boolean
}


const Navlink = async() => {
    const res = await fetch('https://news-api-v2.vercel.app/api/categories');
    const data = await res.json();
    const navs:INavs[] = data.data
    const filterNavs = navs.filter(n => n.scrapable) 
    
  return (
    
    <div className="flex flex-wrap justify-center gap-3 sm:gap-5 text-[15px] sm:text-[18px]">

        <Link href={'/'}>হোম</Link>
         {
            filterNavs.map((nav, ind) => <Link key={ind}
             href={`/category/${nav.slug}`}>{nav.title}</Link>)
        } 
    </div>
  )
}

export default Navlink