import Image from 'next/image'
import Navlink from './Navlink'

const Header = () => {
  // Server-side বাংলা তারিখ জেনারেট করা হচ্ছে
  const date = new Date().toLocaleDateString('bn-BD', {
    dateStyle: 'full',
  })

  return (
    <header className="container max-w-7xl mx-auto px-4 py-3 md:py-4">
      {/* 
        - Mobile: flex-col (স্ট্যাক হয়ে নিচে নিচে আসবে)
        - Tablet/Desktop (md): flex-row (এক সারিতে আসবে) 
      */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-4 md:mb-5">
        
        {/* ডেস্কটপে সেন্টার অলাইনমেন্টের জন্য Spacer, মোবাইলে হিডেন */}
        <div className="hidden md:block w-32" />

        {/* Branding & Logo */}
        <div className="flex items-center gap-3 text-center md:text-left">
          <Image 
            src="/logo.webp" 
            height={50} 
            width={50} 
            alt="logo" 
            className="rounded-lg shrink-0" 
            priority
          />
          <div>
            <h1 className="text-2xl sm:text-3xl text-[#9F0712] font-semibold leading-tight">
              Bangla News 24
            </h1>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              {date}
            </p>
          </div>
        </div>

        {/* Auth Actions */}
        <div className="flex items-center gap-2">
          <button type="button" className="btn text-[15px] sm:text-[18px] px-3 sm:px-4 py-1.5 sm:py-2">
            সাইন ইন
          </button>
          <button type="button" className="btn bg-[#9F0712] text-white text-[15px] sm:text-[18px] px-3 sm:px-4 py-1.5 sm:py-2">
            সাইন আপ
          </button>
        </div>

      </div>

      <Navlink />
    </header>
  )
}

export default Header