import Link from 'next/link'

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      {/* বড় 404 টেক্সট */}
      <h1 className="text-9xl font-extrabold text-red-500 tracking-widest">
        404
      </h1>

      {/* ব্যাজ */}
      <div className="bg-red-100 text-red-600 px-3 py-1 rounded text-sm font-semibold mt-4">
        পেজটি পাওয়া যায়নি
      </div>

      {/* বার্তা */}
      <h2 className="text-3xl md:text-4xl font-bold text-base-content mt-6">
        দুঃখিত, আপনি ভুল পেজে চলে এসেছেন!
      </h2>
      <p className="text-base-content/70 mt-3 max-w-md">
        আপনি যে পেজটি খুঁজছেন তা হয়তো মুছে ফেলা হয়েছে অথবা লিংকটি ভুল ছিল।
      </p>

      {/* আইকনসহ হোম পেজে ফেরার বাটন */}
      <div className="mt-8">
        <Link 
          href="/" 
          className="btn bg-red-600 hover:bg-red-700 text-white px-6 text-base font-medium rounded-lg gap-2"
        >
          {/* Home Icon SVG */}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            strokeWidth={2}
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" 
            />
          </svg>
          হোম পেজে ফিরে যান
        </Link>
      </div>
    </div>
  )
}

export default NotFound