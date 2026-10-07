'use client'

import { signIn, signUp } from "@/lib/auth-client"
import { redirect } from "next/navigation"
import React from "react"
import toast from "react-hot-toast"

const SignUpPage = () => {

  const handleSignUp = async(e:React.SubmitEvent<HTMLElement>) => {
        e.preventDefault()

        const forData = new FormData(e.target)
        const user = Object.fromEntries(forData.entries())as{name:string, image:string,
          email:string, password:string
        };
        
        const { data, error } = await signUp.email({
          ...user,
          callbackURL: '/'
        })

        if(data){
          toast.success("সফল হয়েছে!");
          redirect('/')  
        } 
        if(error){
          toast.error('কিছু একটা সমস্যা হয়েছে। আবার চেষ্টা করুন।');
        }
  }


   const handleGoogleSignIn = async () => {
    await signIn.social({
      provider: "google",
      callbackURL: "/"
    })
  }

    const handleGithubSignIng = async () => {
    await signIn.social({
      provider: "github",
      callbackURL: "/"
    })
  }


  return (

    <div>
    <div className='flex justify-center'>
      <form onSubmit={handleSignUp}>
          <h2 className="text-red-600 font-bold text-2xl text-center">সাইন আপ</h2>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-[500px] border p-10">
          
          <label className="label text-[18px]">নাম</label>
          <input name='name' type="text" className="input w-full h-12" />

          <label className="label text-[18px]">Image</label>
          <input name='image' type="url" className="input w-full h-12" />

          <label className="label text-[18px]">ইমেইল</label>
          <input name='email' type="email" className="input w-full h-12" />

          <label className="label text-[18px]">পাসওয়ার্ড</label>
          <input name='password' type="password" className="input w-full h-12" />

          <button type='submit' className="btn bg-red-500 text-white mt-4 text-[18px]">সাইন আপ করুন</button>
        </fieldset>
      </form>
    </div>
     <div className="flex justify-center">
         <button type="button" className='btn mt-3' onClick={handleGoogleSignIn}>গুগল দিয়ে সাইন ইন করুন</button>
       </div>
       <div className="flex justify-center">
         <button type="button" className='btn mt-3' onClick={handleGithubSignIng}>গিটহাব দিয়ে সাইন ইন করুন</button>
       </div>
      </div>
  )
}

export default SignUpPage



