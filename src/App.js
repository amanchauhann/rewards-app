import { useEffect, useState } from 'react';
import './App.css';
import { FormControl, formControl, Input, InputLabel } from '@mui/material'
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase/compat/app';



function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  // When the app loads , we need to listen to the database and fetch new todos as they get added or removed.
  useEffect(() => {
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      console.log(snapshot.docs.map(doc => doc.data().todo))
      setTodos(snapshot.docs.map(doc => ({id: doc.id,todo: doc.data().todo})))
    })
  }, [])

  const addTodo = (event) => {
    event.preventDefault();

    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    // setTodos([...todos, input]);
    setInput('');
  }


  return (
    <div className="App">
      <h1>Rewards todo</h1>

      

      <form>
        <FormControl>
        <InputLabel>✅Write a Todo</InputLabel>
        <Input value={input} onChange={event => setInput(event.target.value)} />
        </FormControl>

        {/* <input value={input} onChange={event => setInput(event.target.value)} /> */}
        <button disabled={!input} className="btn btn-primary" type='submit' onClick={addTodo}>Add todo</button>
      </form>
      

      <ul>
        {todos.map(todo => (
          <Todo todo={todo} />
          // <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
