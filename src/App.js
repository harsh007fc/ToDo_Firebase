import React, { useState } from 'react';
import './App.css';

function App() {
  let [todos, setTodos] = useState(['Do Work', 'HomeWork', 'Take dog for a walk']);
  let [input, setInput] = useState('');


  let addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, input]);
    setInput('');
  }
  return (
    <div className="App">
      <h1>Lets Manage Our Work</h1>
      <form >
        <input value={input} onChange={(e) => setInput(e.target.value)} type="text" />
        <button type='submit' onClick={addTodo}>Add Todo</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}

      </ul>
    </div>
  );
}

export default App;


