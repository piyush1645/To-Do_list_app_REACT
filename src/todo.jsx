import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
export default function Todo() {
    let [tasks,setTask]=useState([{task:"sample_task",id:uuidv4(),isDone:false}]);
    let [newtask,setNewTask]=useState("");

    let addNewTask = ()=>{
        setTask([...tasks,{task:newtask,id:uuidv4(),isDone:false}]);
        setNewTask("");
    }

    let updateTodoValue=(event)=>{
        setNewTask(event.target.value);
    }

    let deleteTask=(id)=>{
       setTask(tasks.filter((task)=>{task.id !=id}));
    }

    let upperCaseAll=() =>{
        setTask(tasks.map((task)=>{
            return {
                ...task,
                task:task.task.toUpperCase(),
            };
        }));
        
    }

    let upperCaseOne=(id) =>{
       
        setTask(tasks.map((task)=>{
            if(task.id==id){
            return {
                ...task,
                task:task.task.toUpperCase(),
            };}return task;
        }));
        
    }

    let markAsDone =(id)=>{
          
        setTask(tasks.map((task)=>{
            if(task.id==id){
            return {
                ...task,
                isDone:true,
            };}return task;
        }));
    }

    let AllDone=()=>{
        setTask(tasks.map((task)=>{
            return {
                ...task,
                isDone:true,
            };
        }));
    }

    return (
        <>
           
            <input type="text" value={newtask} onChange={updateTodoValue}/>
            <br />
            <button onClick={addNewTask}>Add Task</button>
            <hr />
            <h4>All task</h4>
            <ul>
                {tasks.map((task)=>
                    <li key={task.id}>
                        <span style={task.isDone ? {textDecorationLine:"line-through"}:{}}>{task.task}</span>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <button onClick={()=>deleteTask(task.id)}>Delete</button>
                        <button onClick={()=>upperCaseOne(task.id)}>UpperCase</button>
                        <button onClick={()=>markAsDone(task.id)}>Done</button>
                        </li>
                        
                        
                )}
            </ul>
            <button onClick={upperCaseAll}>UpperCaseAll</button>
            <button onClick={AllDone}>AllDone</button>

        </>);
}