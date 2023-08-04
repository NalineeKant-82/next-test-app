
// const sideBarData=['counter App','todo App','table App']
'use client'
import { useRouter,usePathname } from "next/navigation";



const CustomeSideBar=()=>{
   const router= useRouter();
   const pathname=usePathname()
   console.log(pathname)
    return (
        <div className='w-full h-full flex flex-col gap-6 items-center  justify-center'>

            {/* {sideBarData.map((item)=>(
                 
            <h2 class='text-gray-100 cursor-pointer ' >{item}</h2>
            
            ))} */}

        <h2 className={`text-gray-100 cursor-pointer  w-full flex justify-center  hover:bg-neutral-900 ${pathname.includes('counter')? 'bg-neutral-900':''}`} style={{background:pathname.includes('counter')?'bg-neutral-900':''}}  onClick={()=>router.push('/counter')}>counter App</h2>
        <h2 className={`text-gray-100 cursor-pointer hover:bg-neutral-900 w-full flex justify-center ${pathname.includes('todo')? 'bg-neutral-900':''} `} onClick={()=>router.push('/todo')}>todo App</h2>
        <h2 className={`text-gray-100 cursor-pointer hover:bg-neutral-900 w-full flex justify-center ${pathname.includes('table')? 'bg-neutral-900':''} `}    onClick={()=>router.push('/table')} >table App</h2>
        </div>
    )
}
export default CustomeSideBar;