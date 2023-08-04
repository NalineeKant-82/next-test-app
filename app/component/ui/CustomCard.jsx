'use client'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useState } from "react"

const CustomCard=()=>{

  const [count,setCount]=useState(0)

    return(
    <Card className="w-[350px] h-[250px] flex flex-col	justify-center items-center  max-w-max">
    <CardHeader >
      <CardTitle>Counter App</CardTitle>
    </CardHeader>
    <CardContent>
      <h3>{count}</h3>
    </CardContent>
    <CardFooter 
     className="flex justify-center gap-px">
      <Button onClick={()=>setCount(count+1)}>increase</Button>
      <Button onClick={()=>
        {if(count!=0)setCount(count-1);}}
         >decrease</Button>
    </CardFooter>
  </Card>
    )
}
export default CustomCard;