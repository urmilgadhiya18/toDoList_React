import './TodoList.css'
import { useState,useEffect } from 'react'
import TodoItem from "./TodoItem.jsx";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList(){
    // const [todos,setTodos]=useState(JSON.parse(localStorage.getItem("todos")));
    const [todos,setTodos]=useState(()=>{
        const data=localStorage.getItem("todos");
        return data?JSON.parse(data):[{task:"Learn React 💛", id:uuidv4(), completed:false}];
    });
    const [newTodo,setNewTodo]=useState("");
    const [edit,setEdit]=useState({});

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    let addList=()=>{
        if(newTodo!=="") setTodos((prevTodo)=>{return [...prevTodo,{task: newTodo,id: uuidv4(),completed:false}]});
        setNewTodo("");
    }
    
    let deleteTodo=(id)=>{
        setTodos((prevTodo)=>{return prevTodo.filter((item)=>(item.id!=id))});
    }
    
    let editTodo=(item)=>{
        setEdit({id:item.id, edit:true});
        setNewTodo(item.task);
    }
    
    let editList=()=>{
        if(newTodo!="" && edit.edit){
            setTodos((prevTodo)=>{
                return prevTodo.map((item)=>{
                    if(item.id===edit.id){
                        return {...item, task:newTodo, completed:false};
                    }else{
                        return item;
                    }
                })
            });
        }
        setEdit({edit:false});
        setNewTodo("");
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

let handleSubmit=(e)=>{
    e.preventDefault();
    (!edit.edit) ? addList() : editList();
}

let handleInput=(e)=>{
    setNewTodo(e.target.value);
}

return (
    <>
        <div className="cointainer">
            <h1>To-Do List</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Enter the To-Do' onChange={handleInput} value={newTodo}/>&nbsp;&nbsp;&nbsp;&nbsp;
                {!edit.edit?
                <button type='submit'>Save</button>
                :
                <button type='submit'>Edit</button>
                }
            </form>
            <br /><br /><hr />
            <ul>
                {todos.map((item)=>(
                    <TodoItem key={item.id} task={item} markTodo={markTodo} editTodo={editTodo} deleteTodo={deleteTodo} />
                ))}
            </ul>
        </div>
        </>
    )
}