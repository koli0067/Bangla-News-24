'use client'

import { updateUser, useSession } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";

const ProfilePage = () => {

     const {data:session} = useSession();
     const user = session?.user

     const [show, setShow] = useState(false)


     const handelUpdataProfile = async(e:React.SubmitEvent<HTMLElement>) => {
        e.preventDefault()

         const forData = new FormData(e.target)
        const userData = Object.fromEntries(forData.entries())as{name:string, image:string };

        await updateUser({
            ...userData
            
        })
     }

     const handelShowFrom = () => {
        setShow(!show)
     }


  return (
    <div className="mt-5">
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
                <h2 className="pt-2">{user?.email}</h2>

                <button onClick={handelShowFrom} type='submit' className="btn bg-red-500 text-white mt-4 text-[18px]">পরিবর্তন করুন</button>
            </div>

             

    { show && <form onSubmit={ handelUpdataProfile }>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-[500px] border p-10">
          
          <label className="label text-[18px]">নাম</label>
          <input name='name' type="text" className="input w-full h-12" />

          <label className="label text-[18px]">Image</label>
          <input name='image' type="url" className="input w-full h-12" />

          <button type='submit' className="btn bg-red-500 text-white mt-4 text-[18px]">প্রোফাইল আপডেট করুন</button>
        </fieldset>
      </form>
    }
    </div>
  )
}

export default ProfilePage