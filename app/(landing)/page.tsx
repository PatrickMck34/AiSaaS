import Image from 'next/image'
import Link from 'next/link'
import {Button } from '@/components/ui/button';
export default function Landing() {
  return (
    <div>
      {/* <Link href="/sign-in">

      <Button>
        Sign-in
      </Button>
      </Link>
      <Link href="/sign-up">

      <Button>
        Register
      </Button>
      </Link> */}
  
      <div className="font-sans shadow-md text-gray-200 shadow-orange-400/50 border-2 rounded-lg bg-slate-950 border-orange-300/50 flex flex-col mb-[-7%] mx-auto p-3 mt-2 justify-center w-fit items-center">
      Want to talk to Persephone?
      <div className="flex flex-row p-1 mx-5">

      <button className="border-2 border-orange-400/50 shadow-sm shadow-orange-400/50 rounded-xl p-1 ">
        Yes
      </button>
      <button className="border-2 border-orange-400/50 rounded-xl p-1 mx-5 shadow-sm shadow-orange-400/50 ">
        No
      </button>
      </div>
      </div>

 
    <div>
      <div className="font-sans shadow-md shadow-orange-400/50 border-2 rounded-lg bg-slate-950 border-orange-300/50 flex flex-col mt-[10%] mx-auto p-3 text-black text-2xl justify-center w-fit items-center">
      
          <p className="mb-2 p-1 text-3xl text-gray-200 font-sans"> Welcome to Persephone's Promise</p>
      

        <div className="">


      </div>
        <img src="pers.png" className="h-36 w-36 mt-6 mb-9 shadow-md shadow-slate-300 border border-slate-300"></img>
      <p className="text-sm text-gray-300">Please choose an option to continue</p>
      <div className="flex flex-row items-center justify-center mt-4">
    <Link href="/sign-in">

      <button className="bg-green-950 border-2 border-gray-600 w-32 rounded-xl p-1 mx-8 text-2xl text-gray-300">Provider</button>
    </Link>
      <Link href="/user" >
      <button className="bg-green-950 border-2 border-gray-600 rounded-xl p-1 mx-8 text-2xl w-32 text-gray-300"> User </button>
      </Link>

        </div>
      </div>

    </div>
    </div>
  )
}

