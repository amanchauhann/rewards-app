import { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState(['Take dogs for walk', 'rubbish out', 'it is fkcinggg true']);
  const [input, setInput] = useState('');

  const addTodo = (event) => {
    setTodos([...todos, input]);
  }


  return (
    <div className="App">
      <h1>Hello</h1>
      <input value={input} onChange={event => setInput(event.target.value)} />
      <button onClick={addTodo}>Add todo</button>

      <ul>
        {todos.map(todo => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
