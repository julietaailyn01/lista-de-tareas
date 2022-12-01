import { useSelector, useDispatch } from "react-redux"
import {deleteTask} from "../features/tasks/taskSlice"

function TasksList(){
    const tasks= useSelector(state=> state.tasks)
    const dispatch = useDispatch()

    const handleDelete = (id) =>{
        dispatch(deleteTask(id))

    }
    return (
        <div className="w-4/6 items-center justify-center text-center">
            <div className="flex justify-between text-xl py-4 items-center">
              <h1 className="text-center">Tienes {tasks.length} tareas pendientes... </h1>    
            </div>
            <div className="grid grid-cols-2 gap-3 mt-5">
            {tasks.map(task =>(
                <div key={task.id} className="bg-neutral-800 rounded-md">
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>
                    <button onClick={()=> handleDelete(task.id)}
                    className="bg-red-500 px-3 py-3 m-4 text-xs rounded-md self-center">Eliminar</button>
                </div>
            ))}
            </div>
        </div>
    )
}

export default TasksList