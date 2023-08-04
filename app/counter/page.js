'use client'

const { default: CustomCard } = require("../component/ui/CustomCard")
const { default: LandingPage } = require("../landing/LandingPage")

const CounterApp=()=>{
return (
    <div className="h-screen w-full flex flex-col gap-3 justify-center items-center ">
    <LandingPage>
        <CustomCard/>
    </LandingPage>   
     {/* <LandingPage/> */}
    </div>
)
}
export default CounterApp;