import { useState } from 'react';
import './App.css';

function App() {
  const [todo, SetTodo] = useState('');
  const [todolist, SetTodoList] = useState([]);
  const addTodo = () => {
    SetTodoList([...todolist, todo]);
    SetTodo('');
  }

  return (
    <div className="App">
        <input placeholder='Write To do' value={todo} onChange={(e)=>SetTodo(e.target.value)}/>
        <button onClick={addTodo}>Add To Todo List</button>
        <div>
          {todolist.map((item, key) => 
            <li>{item}</li>
          )}
        </div>
    </div>
  );
}

export default App;
