export function TodoItem({status, id, text, toggleTodo, deleteTodo}){
    return (

        <li>
            <label>
                <input type="checkbox" 
                    onChange={e => toggleTodo(id, e.target.checked)} 
                    checked={status} 
                />{text}
            </label>
            <button 
                onClick={()=>deleteTodo(id)}
                className='btn btn-danger'>Delete
            </button>
        </li>
    )

}