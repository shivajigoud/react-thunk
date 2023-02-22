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
  const [isEdit, setEdit] = useState(false);
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
    const payLoad = findTodo(id);
    dispatch(updateTodo({ ...payLoad, inProgress: e.target.checked }));
  };
  const onEdit = (id) => {
    setEdit(true);
    todoRef.current.focus();
    const payLoad = findTodo(id);
    setTodo({ ...payLoad });
  };
  const saveTodo = () => {
    dispatch(updateTodo(todo));
    setEdit(false);
  };
  const onDelete = (id) => {
    const payLoad = findTodo(id);
    dispatch(updateTodo({ ...payLoad, isDeleted: true }));
  };
  const onComplete = (id) => {
    const payLoad = findTodo(id);
    dispatch(updateTodo({ ...payLoad, isCompleted: true }));
  };
  const findTodo = (id) => {
    return todos.find((v, i, a) => {
      return v.id == id;
    });
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
      {isEdit ? (
        <button type="submit" onClick={saveTodo}>
          Save Todo
        </button>
      ) : (
        <button type="submit" onClick={onAddTodo}>
          Add Todo
        </button>
      )}
      <ul className="grid">
        {todos &&
          todos.map((todo, i) => {
            return (
              <>
                {!todo.isDeleted && !todo.isCompleted && (
                  <li
                    key={todo.id}
                    className={`row ${todo.inProgress ? 'row-active' : ''}`}
                  >
                    <input
                      type="checkbox"
                      onChange={(e) => onTodoProgress(e, todo.id)}
                      checked={todo.inProgress}
                    />
                    <span>{todo.name}</span>
                    <button onClick={() => onEdit(todo.id)}>Edit</button>
                    <button onClick={() => onDelete(todo.id)}>Delete</button>
                    <button onClick={() => onComplete(todo.id)}>
                      Complete
                    </button>
                  </li>
                )}
              </>
            );
          })}
      </ul>
    </div>
  );
}
