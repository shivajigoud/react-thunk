import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from './actions/todoAction';
import './style.css';

export default function App() {
  const users = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const todoRef = useRef();
  const [todo, setTodo] = useState('enter new todo');
  useEffect(() => {}, []);
  const handleTodoChange = (e) => {
    setTodo(e.target.value);
  };
  const onAddTodo = () => {
    console.log(todo);
    dispatch(addTodo(todo));
  };
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <input
        type="text"
        value={todo}
        onChange={handleTodoChange}
        ref={todoRef}
      />
      <button type="submit" onClick={onAddTodo}>
        Add Todo
      </button>
      <ul>
        {users &&
          users.map((data, i) => {
            return <li key={`user${i}`}>{data.email}</li>;
          })}
      </ul>
    </div>
  );
}
