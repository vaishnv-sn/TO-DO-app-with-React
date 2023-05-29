import { useState } from 'react';
import "./style.css"
import { NewTodoForm } from './newTodoForm';

function App() {
  const [toDos, setToDos] = useState([]);

  function addTodo(text){
    setToDos(currentToDos => {
          return [
            ...currentToDos, {id:crypto.randomUUID(), text, status:false}
          ]
        })
  }

  function toggleTodo(id, status){
    setToDos(currentToDos =>{
      return currentToDos.map(todo => {
        if(todo.id===id){
          return {...todo, status}
        }
        return todo;
      })
    })
  }

  function deleteTodo(id){
    setToDos(currentToDos =>{
      return currentToDos.filter(todo=> todo.id!==id)
    })
  }

  return (
    <>
      <NewTodoForm onSubmit={addTodo}/>
      <h1 className='header'>Todo List</h1>
      <ul className='list'>
        {toDos.length === 0 && 'No Tasks Added'}
        {toDos.map(todo=>{
            return <li key={todo.id}>
                        <label>
                            <input type="checkbox" 
                                onChange={e => toggleTodo(todo.id, e.target.checked)} 
                                checked={todo.status} 
                            />{todo.text}
                        </label>
                        <button 
                            onClick={()=>deleteTodo(todo.id)}
                            className='btn btn-danger'>Delete</button>
                    </li>
        })}
            
        </ul>
    </>
  )
}

export default App;