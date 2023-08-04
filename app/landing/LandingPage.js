
import CustomeSideBar from "../component/ui/CustomeSideBar";

const LandingPage=({children})=>{
   
return (
    <div class='flex w-full h-full flex justify-between items-center ' >
    <div class='w-1/5 h-full bg-rose-700'>
    <CustomeSideBar />
    </div>

    <div class='h-full w-4/5 bg-[#f87171] flex justify-center items-center' >
        <div>{children}</div>
    </div>
    </div>
)
}
export default LandingPage;