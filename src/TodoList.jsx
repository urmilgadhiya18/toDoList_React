import './App.css'
import { useState } from 'react'
import TodoItem from "./TodoItem.jsx";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList(){
    const [todos,setTodos]=useState([{task:"Learn React 💛",id:uuidv4(),completed:false}]);
    const [newTodo,setNewTodo]=useState("");
    
    let addList=()=>{
        if(newTodo!="") setTodos((prevTodo)=>{return [...prevTodo,{task: newTodo,id: uuidv4(),completed:false}]});
        setNewTodo("");
    }

    let deleteTodo=(id)=>{
        setTodos((prevTodo)=>{return prevTodo.filter((item)=>(item.id!=id))});
    }

    let markTodo=(id)=>{
        setTodos((prevTodo)=>{
        return prevTodo.map((item)=>{
            if(item.id===id){
            return {...item,completed:!item.completed};
            }else{
            return item;
            }
        })
        });
    }

    let handleInput=(e)=>{
        setNewTodo(e.target.value);
    }

    return (
        <>
            <h1>To-Do List</h1>
            <input type="text" placeholder='Enter the To-Do' onChange={handleInput} value={newTodo}/>&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={addList}>Add To-Do</button>
            <br /><br /><br /><hr />
            <ul style={{fontWeight: 700, padding:'4px'}}>
                {todos.map((item)=>(
                    <TodoItem key={item.id} task={item} markTodo={markTodo} deleteTodo={deleteTodo} />
                ))}
            </ul>
        </>
    )
}