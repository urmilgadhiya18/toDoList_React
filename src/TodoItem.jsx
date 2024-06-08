import './App.css'

export default function TodoItem({task,markTodo,deleteTodo}){
    return(
        <li key={task.id} style={{display: 'flex', gap: '18px', alignItems:'center'}}>
            <input type="checkbox" onClick={()=>markTodo(task.id)} style={{width:'18px', height:'18px'}}/>
            {(!task.completed)?
              <h3 style={{width:'200px', margin:'15px 7px', textAlign:'left'}}>{task.task}</h3>
              :
              <h3 style={{width:'200px', margin:'15px 7px', textAlign:'left', color:'rgb(255 255 255 / 32%)', textDecoration:'line-through'}}>{task.task}</h3>
            }
            <button onClick={()=>deleteTodo(task.id)} style={{height:'max-content'}}>Delete</button>
        </li>
    );
}