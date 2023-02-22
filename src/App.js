import React, { useEffect, useState, useRef, useId } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addTodo,
  updateTodo,
  fetchTodos,
  getTodos,
} from './actions/todoAction';
import utils from './utils';
import './style.css';

export default function App() {
  // console.log(utils.getNewID(2)());
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const todoRef = useRef();
  const [todo, setTodo] = useState({
    name: '',
    isCompleted: false,
    inProgress: false,
    isDeleted: false,
    id: utils.uid(),
  });
  useEffect(() => {
    dispatch(fetchTodos());
  }, []);
  const handleTodoChange = (e) => {
    setTodo({ ...todo, name: e.target.value });
  };
  const onAddTodo = () => {
    setTodo({ ...todo, id: utils.uid() });
    console.log(todo);
    dispatch(addTodo(todo));
  };
  const onTodoProgress = (e, id) => {
    console.log(id);
    const payLoad = todos.find((v, i, a) => {
      return v.id == id;
    });
    dispatch(updateTodo({ ...payLoad, inProgress: e.target.checked }));
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
              <li
                key={`user${i}`}
                className={`row ${todo.inProgress ? 'row-active' : ''}`}
              >
                <input
                  type="checkbox"
                  onChange={(e) => onTodoProgress(e, todo.id)}
                  checked={todo.inProgress}
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
