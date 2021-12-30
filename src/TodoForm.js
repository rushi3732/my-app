import React,{useState} from 'react'
import Form from './Form'

function TodoForm() {
const[input,setInput]=useState('')
const handleSubmit=e=>{
    e.preventDefault()

}
    return (
        <div>
            <form className="todo-form" onSubmit={handleSubmit}>
                <input 
                type="text"
                placeholder="Add a todo"
                value={input}
                name="text" 
                className="todo-input"
                />
                <button className="todo-button"> Add todo</button>

            </form>
            
        </div>
    )
}

export default TodoForm
