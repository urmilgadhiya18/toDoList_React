import './App.css'
import './TodoList.css'
import deleteIcon from './assets/deleteIcon.svg'
import editIcon from './assets/editIcon.svg'

export default function TodoItem({task,markTodo,editTodo,deleteTodo}){
    return(
        <li key={task.id} style={{display:"flex", alignItems:"center"}}>
            <input type="checkbox" onClick={()=>markTodo(task.id)} style={{width:'18px', height:'18px'}} />
            <div className="place">
                {(!task.completed)?
                <div style={{width:'100%', margin:'10px 7px', textAlign:'left'}}>{task.task}</div>
                :
                <div style={{width:'100%', margin:'10px 7px', textAlign:'left', color:'rgb(255 255 255 / 32%)', textDecoration:'line-through'}}>{task.task}</div>
                }
                <img src={editIcon} alt="Edit_Icon" onClick={()=>editTodo(task)} className="edit" />
                <img src={deleteIcon} alt="Delete_Icon" onClick={()=>deleteTodo(task.id)} className="delete" />
            </div>
        </li>
    );
}