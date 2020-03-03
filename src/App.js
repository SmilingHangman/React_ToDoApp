import React, { useState } from 'react';
import classes from './App.module.scss'

function App() {

const [currentTodo, setCurrentTodo] = useState("")
const [todos, setTodos] = useState([])

  return (
    <div className={classes.container}>
      <input type="text" placeholder="Write a task" onInput={event => setCurrentTodo(event.target.value)}/>
      <button onClick={() => setTodos([...todos, { currentTodo, id: String(Math.random()) }])}>Add task</button>
      <ul className={classes.tasklist}>
            {todos.map(todo => (
              <li key={todo.id}> {todo.currentTodo} <button onClick={() => setTodos(todos.filter(el => todo.id !== el.id))}>Delete</button>
              </li>
              ))}
      </ul>
    </div>
  );
}

export default App;
