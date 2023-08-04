'use client'
import axios from 'axios'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import LandingPage from '../landing/LandingPage'
const { useEffect, useState } = require("react")

const CustomTable=()=>{
    const [data,setData]=useState([])
    useEffect(()=>{
        fetchData()
    },[])

   const fetchData=async()=>{
    console.log('dswdsd')
    const data=await axios('api/user')
    console.log('hgfhgjh=>',data)
    setData(data?.data)
   }
    return(
      <div className='w-full h-screen flex flex-col gap-3 justify-center items-center bg-rose-700'>
<LandingPage>
<Table>
  <TableCaption>Predict the nationality of a person based on their name.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead >Nation</TableHead>
      <TableHead >Population</TableHead>
      <TableHead >Year</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {data.map((item,index)=>(
    <TableRow key={index}>
      <TableCell class="font-medium">{item.Nation}</TableCell>
      <TableCell>{item.Population}</TableCell>
      <TableCell>{item.Year}</TableCell>
    </TableRow>
    ))}
    </TableBody>
</Table>
</LandingPage>
</div>
    )
}
export default CustomTable;