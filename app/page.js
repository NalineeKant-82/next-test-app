'use client'
import { useEffect } from "react";
import LandingPage from "./landing/LandingPage";
import CustomeSideBar from "./component/ui/CustomeSideBar";
import {useRouter} from 'next/navigation'

export default function Home() {
  const router=useRouter()
  useEffect(()=>{
    router.push('/counter')
  },[])
  return (
    <div className='flex w-full	h-screen' >
   <LandingPage/>
    </div>
  )
}
