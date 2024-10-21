
import { useState } from 'react';
import './App.css';

import Todolist from './comp/Todolist';
import InputField from './comp/InputField';

export interface Todo{
  id: number,
  todo:string
}
const  App :React.FC= () => {
const  [todo,settodo ] = useState<string>('')
const [todos, settodos] = useState<Todo[]>([])

  return (
    <div className="App">
      <h1>Todo App</h1>
      <InputField todo={todo} settodo={settodo} todos={todos} settodos={settodos}/>
      <Todolist todos={todos}/>
    </div>
  );
}

export default App;
