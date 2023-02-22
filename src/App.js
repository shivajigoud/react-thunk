import React, { useEffect, useState, useRef, useId } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, updateTodo, fetchTodos } from './actions/todoAction';
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
    id: 0,
  });
  useEffect(() => {
    dispatch(fetchTodos());
  }, []);
  const handleTodoChange = (e) => {
    setTodo({ ...todo, name: e.target.value });
  };
  const onAddTodo = () => {
    setTodo({ ...todo, id: 1 });
    console.log(todo);
    dispatch(addTodo(todo));
  };
  const onTodoProgress = (id) => {
    const payLoad = todos.find((v, i, a) => {
      return v.id == id;
    });
    dispatch(updateTodo(payLoad));
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
                <input
                  type="checkbox"
                  onChange={() => onTodoProgress(todo.id)}
                />
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
