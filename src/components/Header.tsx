import Image from 'next/image'
import Navlink from './Navlink'
import Userinfo from './Userinfo'

const Header = () => {
  // Server-side বাংলা তারিখ জেনারেট করা হচ্ছে
  const date = new Date().toLocaleDateString('bn-BD', {
    dateStyle: 'full',
  })

  return (
    <header className="container max-w-7xl mx-auto px-4 py-3 md:py-4">
     
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-4 md:mb-5">
        
        <div className="hidden md:block w-32" />

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
        <Userinfo></Userinfo>
      </div>

      <Navlink />
    </header>
  )
}

export default Header