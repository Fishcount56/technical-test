import React, { useState } from 'react';
import './App.css'
import Form from "./components/form"
import List from "./components/list"

function App() {
  const [input, setInput] = useState("")
  const [todo, setTodo] = useState([])
  const [edit, setEdit] = useState(null)
  return (
    <div>
      <div className="App">
        <h1>Todo App</h1>
        <div>
          <Form 
            input = {input}
            setInput = {setInput}
            todo = {todo}
            setTodo = {setTodo}
            edit = {edit}
            setEdit = {setEdit}
          />
        </div>
        <div>
          <List 
            todo = {todo}
            setTodo = {setTodo}
            setEdit = {setEdit}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
