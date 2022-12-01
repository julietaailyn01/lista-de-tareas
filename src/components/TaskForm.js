import { useState } from "react"
import{useDispatch} from "react-redux"
import {addTask} from "../features/tasks/taskSlice"
import {v4 as uuid} from "uuid"


function TaskForm(){

    const [task, setTask]= useState({
        title:"",
        description:""
    })
    const dispatch = useDispatch()

    const handleChange = e =>{
        setTask({
            ...task,
            [e.target.name]: e.target.value,
        });
    }
    const handleSubmit= (e)=>{
        e.preventDefault();
        dispatch(addTask({
            ...task,
            id: uuid(),
        }))
    }
    return(
        <form onSubmit={handleSubmit} className="bg-zinc-800 max-w-sm p-4 rounded-md">
            <label htmlFor="title" className="block text-sm font-bold">Tarea</label>

            <input name="title" type="text" placeholder="title" onChange={handleChange}
            value={task.title}
            className="w-full p-2 rounded-md bg-zinc-600 mb-2"
            />

            <label htmlFor="description" className="block text-sm font-bold">Descripcion </label>
            <textarea name="description" placeholder="description" onChange={handleChange} 
            value={task.description}
            className="w-full p-2 rounded-md bg-zinc-600 mb-2"
            ></textarea>

            <button className="bg-indigo-600 rounded-md p-2">Guardar</button>


        </form>
    )
}

export default TaskForm