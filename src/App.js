import React, { useState } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import { FormControl,Input,InputLabel } from '@material-ui/core';
import Todo from './Components/Todo';

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
        
        <FormControl>
          <InputLabel >Write a To-do</InputLabel>
          <Input value={input} onChange={(e) => setInput(e.target.value)} type="text" />
        </FormControl>
        <Button disabled={!input} type='submit' onClick={addTodo} variant="contained" color="primary">Add Todo</Button>
      </form>
      <ul>
        {todos.map((todo) => (
          // <li>{todo}</li>
          <Todo todo={todo}/>
        ))}

      </ul>
    </div>
  );
}

export default App;


