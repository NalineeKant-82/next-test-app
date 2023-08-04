'use client'
import LandingPage from "../landing/LandingPage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {useState} from 'react'
const Todo=()=>{
    const [AllTodo,setAllTodo]=useState([])
    const [todo,setTodo]=useState('')
    const AddAllTodo=()=>{
        const prevTodo=[...AllTodo]
        prevTodo.push(todo)
        setAllTodo(prevTodo)
    }
    const deleteTodo=(id)=>{
    console.log(id)
    const todos=[...AllTodo]
    todos.splice(id,1)
    setAllTodo(todos)
    }

    return (
        <div className=" w-full h-screen flex flex-col gap-3 justify-center items-center bg-rose-700	" >
            <LandingPage>
        <div className="flex gap-1" >
                <Input className="rounded-md " placeholder="enter the todo.." onChange={(e)=>setTodo(e.target.value)} />
                <Button className='h-10 w-32' onClick={AddAllTodo}>add todo</Button>
        </div>
        <div>
        {
            AllTodo.map((item,index)=>(
                <div key={index} className="flex">
                    <h3 className="text-slate-100" >{item}</h3>
                    <Button className="h-5" onClick={()=>deleteTodo(index)}>delete</Button>
                 </div>
            ))
        }
        </div>
        </LandingPage>
        </div>
    )
}
export default Todo;