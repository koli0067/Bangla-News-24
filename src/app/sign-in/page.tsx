'use client'

import { signIn } from '@/lib/auth-client'
import { redirect } from 'next/navigation'
import React from 'react'
import toast from 'react-hot-toast'

const SignInPage = () => {

   const handleSignIn = async(e:React.SubmitEvent<HTMLElement>) => {
          e.preventDefault()
  
          const forData = new FormData(e.target)
          const user = Object.fromEntries(forData.entries())as{email:string, password:string
          };
          
          
          const { data, error } = await signIn.email({
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
      <form onSubmit={handleSignIn}>
          <h2 className="text-red-600 font-bold text-2xl text-center">সাইন ইন</h2>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-[500] border p-8">

          <label className="label text-[18px]">ইমেইল</label>
          <input name='email' type="email" className="input w-full h-12" />

          <label className="label text-[18px]">পাসওয়ার্ড</label>
          <input name='password' type="password" className="input w-full h-12" />

          <button className="btn bg-red-500 text-white mt-4 text-[18px]">সাইন ইন করুন</button>
        </fieldset>
      </form>
      </div>

      {/* <p className='text-center'>অ্যাকাউন্ট নেই? <span onClick={handleGoogleSignIn}
       className='text-red-600 font-semibold hover:underline'>গুগল দিয়ে সাইন আপ করুন</span></p> */}
      <div className="flex justify-center">
         <button type="button" className='btn mt-3' onClick={handleGoogleSignIn}>গুগল দিয়ে সাইন ইন করুন</button>
       </div>
       <div className="flex justify-center">
         <button type="button" className='btn mt-3' onClick={handleGithubSignIng}>গিটহাব দিয়ে সাইন ইন করুন</button>
       </div>
    </div>
  )
}

export default SignInPage