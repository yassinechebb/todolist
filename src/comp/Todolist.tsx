import React from 'react'
import { Todo } from '../App'
interface Props{
    todos:Todo[]
}
const Todolist = ({todos}:Props) => {
  return (
    <div>
        {todos.map((el=><div><h3 style={{color:"white"}}>{el.todo}</h3></div>))}
    </div>
  )
}

export default Todolist