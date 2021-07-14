import React, { useEffect, useState } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import { FormControl,Input,InputLabel } from '@material-ui/core';
import Todo from './Components/Todo';
import db from '../src/Components/Firebase/firebase'
import firebase from 'firebase';

function App() {
  let [todos, setTodos] = useState([]);
  let [input, setInput] = useState('');

 //idhar ek baar hi chalana hai 
  useEffect(()=>{
    //this fires when the app loads
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot=>{
      setTodos(snapshot.docs.map(doc =>(doc.data().todo)))
    });
  },[]);

  let addTodo = (e) => {
    e.preventDefault();
    db.collection('todos').add({
      todo:input,
      timestamp:firebase.firestore.FieldValue.serverTimestamp(),
    })
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


