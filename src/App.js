import React, { useEffect, useState, useRef, useId } from 'react';
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
    id: useId(),
  });
  useEffect(() => {}, []);
  const handleTodoChange = (e) => {
    setTodo({ ...todo, name: e.target.value });
  };
  const onAddTodo = () => {
    console.log(todo);
    dispatch(addTodo(todo));
  };
  const onTodoProgress = (i) => {
    console.log(i);
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
      <ul className="grid">
        {todos &&
          todos.map((todo, i) => {
            return (
              <li key={`user${i}`} className="row">
                <input type="checkbox" onChange={() => onTodoProgress(i)} />
                <span>{todo.name}</span>
                <button>Edit</button>
                <button>Delete</button>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
