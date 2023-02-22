import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from './actions/todoAction';
import './style.css';

export default function App() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const todoRef = useRef();
  const [todo, setTodo] = useState({
    name: '',
    isCompleted: false,
    inProgress: false,
    isDeleted: false,
  });
  useEffect(() => {}, []);
  const handleTodoChange = (e) => {
    setTodo({ ...todo, name: e.target.value });
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
        value={todo.name}
        onChange={handleTodoChange}
        ref={todoRef}
      />
      <button type="submit" onClick={onAddTodo}>
        Add Todo
      </button>
      <ul>
        {todos &&
          todos.map((todo, i) => {
            return <li key={`user${i}`}>{todo.name}</li>;
          })}
      </ul>
    </div>
  );
}
