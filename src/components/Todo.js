import React, { useState } from "react";
import '../styles/styles.css'
export default function Todo() {
  const [input, setInput] = useState("");
  const [todos, setTodo] = useState([]);

  function handleChange(e) {
    let value = e.target.value;
    setInput(value);
  }

  function addTodo() {
    if (input.trim() === "") return;
    setTodo((prev) => [...prev, input]);
    setInput("");
  }

  function deleteTask(id)
  {
  let filterTask= todos.filter((todo,index)=>index!==id);
  setTodo(filterTask);
  }

  return (
    <div className="todo-container">
      <h1 className="title">To-Do List</h1>

      <div className="input-box">
        <input type="text" value={input} onChange={handleChange} placeholder="Enter a Task.." className="todo-input"></input>
        <button onClick={addTodo} className="add-btn">Add Todo</button>
      </div>

      <div className="todo-list">
        {todos.map((todo, index) => (
          <div key={index} className="todo-item">
            <p>{todo}</p>
            <button onClick={()=>deleteTask(index)} className="delete-btn">Delete</button>
          </div>
        ))}
      </div>

    </div>
  );
}
