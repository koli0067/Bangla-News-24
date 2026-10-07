'use client'

import { signOut, useSession } from "@/lib/auth-client"
import Link from "next/link";



const Userinfo = () => {

    const {data:session} = useSession();
    const user = session?.user

    const handleSignOut = async() =>{
        await signOut();

    }


  return (
    <div>
        {
            user?
                <div className="flex flex-col items-center gap-2" >
               <Link href={'/profile'}>
                  <div className="avatar">
                  <div className="ring-primary ring-offset-base-100 w-12 rounded-full ring-2 ring-offset-2">
                      <img alt="Tailwind-CSS-Avatar-component"
                      src={user?.image as string} />
                  </div>
                </div>
               </Link>
                <h2 className="pt-2">{user?.name}</h2>
                 <button onClick={handleSignOut} className="border rounded py-2 px-4 border-gray-200 bg-red-600 text-white">Sign Out</button>
            </div>
           
            
            : <div className="flex items-center gap-2">
          <Link href={'/sign-in'}>
            <button type="button" className="btn text-[15px] sm:text-[18px] px-3 sm:px-4 py-1.5 sm:py-2">
                সাইন ইন
            </button>
          </Link>
          <Link href={'/sign-up'}>
            <button type="button" className="btn bg-[#9F0712] text-white text-[15px] sm:text-[18px] px-3 sm:px-4 py-1.5 sm:py-2">
                সাইন আপ
            </button>
          </Link>
        </div>
        }
    </div>

  )
}

export default Userinfo