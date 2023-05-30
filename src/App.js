import { useEffect, useState } from 'react';
import "./style.css"
import { NewTodoForm } from './newTodoForm';
import { TodoList } from './TodoList';

function App() {
  const [toDos, setToDos] = useState(()=>{
    const localValue = localStorage.getItem("ITEMS")
    if(localValue==null) return []
    return JSON.parse(localValue);
  });

  useEffect(()=>{
    localStorage.setItem("ITEMS", JSON.stringify(toDos))
  }, [toDos])

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
      <TodoList toDos={ toDos } toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </>
  )
}

export default App;