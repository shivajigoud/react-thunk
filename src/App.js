import React, { useEffect, useState, useRef, useId } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, updateTodo, fetchTodos } from './actions/todoAction';
import utils from './utils';
import './style.css';

export default function App() {
  console.log(utils.getNewID(2)());
  const todos = useSelector((state) => state.todos);
  const [lastId, setId] = useState(1);
  const dispatch = useDispatch();
  const todoRef = useRef();
  const [todo, setTodo] = useState({
    name: '',
    isCompleted: false,
    inProgress: false,
    isDeleted: false,
    id: lastId,
  });
  useEffect(() => {
    dispatch(fetchTodos());
  }, []);
  const handleTodoChange = (e) => {
    setTodo({ ...todo, name: e.target.value });
  };
  const onAddTodo = () => {
    if (todos.length > 0) setId(todos[todos.length - 1]['id']);
    else setId(1);
    setTodo({ ...todo, id: utils.getNewID(lastId)() });
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
