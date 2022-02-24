import { useState } from "react"

export const Customer=()=>{
    const [task,setTask]=useState("")
    const [list,setList]=useState([])
    const handleTask=(e)=>{
        setTask(e.target.value)
    }
    const taskList=()=>{
        setList([...list,task])
        setTask("")
    }
    return(
        <div>
            <h1>add a task</h1>
            <input type="text" placeholder="type your task" value={task} onChange={handleTask} />
            <button onClick={taskList}>add task</button>
            {list.map((e,id)=>{return(
                <div key={id}>{e}</div>
            )})}
        </div>
    )
}