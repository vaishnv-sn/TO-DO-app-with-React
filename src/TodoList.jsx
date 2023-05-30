import { TodoItem } from "./TodoItem"

export function TodoList({toDos, toggleTodo, deleteTodo}){
    return(
        <ul className='list'>
            {toDos.length === 0 && 'No Tasks Added'}
            {toDos.map(todo=>{
                return (
                    <TodoItem {...todo} key = {todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
                )
            })}
      </ul>
    )
}