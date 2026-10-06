import Link from "next/link";

interface IMostReadNews {
      id: string,
      title: string
}

const MostRead = async() => {

    const res = await fetch('https://news-api-v2.vercel.app/api/news/most-read');
    const data = await res.json();
    const news:IMostReadNews[] = data.data;


  return (
    <div className=' border border-gray-200 p-4'>
        <h2 className='text-2xl font-bold text-red-700 mb-4'>সর্বাধিক পঠিত</h2>

        <div>
            {
                news.map((n, ind) =>
                
               <Link key={n.id} href={`/news/${n.id}`}>
               
                <div className='pb-5 flex gap-3'>
                    <p className='font-bold text-[25px] text-red-600'>{ind + 1}</p>
                    <h2 className='text-[18px] font-bold'>{n.title}</h2>
                </div>
               </Link>
                
            )
            }
        </div>
    </div>
  )
}

export default MostRead