import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className=" mt-16 pt-12 pb-6 border-t-2 border-gray-200">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
        
        {/* Col 1: Branding & Info */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image 
              src="/logo.webp" 
              height={40} 
              width={40} 
              alt="Bangla News 24 Logo" 
              className="rounded-lg bg-white p-1"
            />
            <h2 className="text-xl font-bold">Bangla News 24</h2>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed mb-4">
            সত্য ও বস্তুনিষ্ঠ সংবাদের বিশ্বস্ত অনলাইন সংবাদ মাধ্যম। চব্বিশ ঘণ্টা দেশ ও বিদেশের সব খবর সবার আগে।
          </p>
          <div className="text-xs text-gray-400 space-y-1">
            <p><span className="font-semibold text-gray-400">সম্পাদক ও প্রকাশক:</span> আপনার নাম</p>
            <p><span className="font-semibold text-gray-400">ইমেইল:</span> info@banglanews24.com</p>
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div>
          <h3 className="font-semibold text-lg border-b-2 border-[#9F0712] inline-block pb-1 mb-4">
            জনপ্রিয় বিভাগ
          </h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/category/national" className="hover:text-red-400 transition">জাতীয়</Link></li>
            <li><Link href="/category/politics" className="hover:text-red-400 transition">রাজনীতি</Link></li>
            <li><Link href="/category/sports" className="hover:text-red-400 transition">খেলাধুলা</Link></li>
            <li><Link href="/category/entertainment" className="hover:text-red-400 transition">বিনোদন</Link></li>
            <li><Link href="/category/tech" className="hover:text-red-400 transition">প্রযুক্তি</Link></li>
          </ul>
        </div>

        {/* Col 3: Legal & Important Links */}
        <div>
          <h3 className=" font-semibold text-lg border-b-2 border-[#9F0712] inline-block pb-1 mb-4">
            গুরুত্বপূর্ণ লিংক
          </h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-red-400 transition">আমাদের সম্পর্কে</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-red-400 transition">গোপনীয়তা নীতি</Link></li>
            <li><Link href="/terms" className="hover:text-red-400 transition">ব্যবহারের শর্তাবলী</Link></li>
            <li><Link href="/contact" className="hover:text-red-400 transition">যোগাযোগ</Link></li>
            <li><Link href="/archive" className="hover:text-red-400 transition">আর্কাইভ</Link></li>
          </ul>
        </div>

        {/* Col 4: Social & App */}
        <div>
          <h3 className=" font-semibold text-lg border-b-2 border-[#9F0712] inline-block pb-1 mb-4">
            আমাদের সাথে থাকুন
          </h3>
          <p className="text-sm text-gray-400 mb-4">
            সোশ্যাল মিডিয়ায় সর্বশেষ খবরের আপডেট পেতে আমাদের পেজগুলোতে ফলো করুন।
          </p>
          
          {/* Social Links */}
          <div className="flex gap-3 text-sm">
            <a href="#" className="w-9 h-9 rounded-full bg-gray-800 hover:bg-[#9F0712] flex items-center justify-center transition text-white">
              FB
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-gray-800 hover:bg-[#9F0712] flex items-center justify-center transition text-white">
              YT
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-gray-800 hover:bg-[#9F0712] flex items-center justify-center transition text-white">
              X
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Bar / Copyright */}
      <div className="border-t border-gray-800 pt-5 text-center text-xs text-gray-500 max-w-7xl mx-auto px-4">
        <p>© {new Date().getFullYear()} Bangla News 24. সর্বস্বত্ব সংরক্ষিত।</p>
      </div>
    </footer>
  )
}

export default Footer