import { useState } from 'react';
import './App.css';
import { FormControl, formControl, Input, InputLabel } from '@mui/material'
import Todo from './Todo';

function App() {
  const [todos, setTodos] = useState(['Take dogs for walk', 'rubbish out', 'it is fkcinggg true']);
  const [input, setInput] = useState('');

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, input]);
    setInput('');
  }


  return (
    <div className="App">
      <h1>Hello</h1>

      

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
          <Todo text={todo} />
          // <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
