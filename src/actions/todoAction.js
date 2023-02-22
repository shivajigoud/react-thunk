import { ADD_TODOS, UPDATE_TODOS, DELETE_TODOS } from './actions.js';

export const addTodo = (payload) => async (dispatch, action) => {
  const currentTodos = await getTodos();
  const todos = JSON.parse(currentTodos);
  await addTodos({ ...todos, payload });
  dispatch(ADD_TODOS, payload);
};

function getTodos() {
  return new Promise((resolve, reject) => {
    const todos = localStorage.getItem('Todos');
    if (todos) {
      resolve(todos);
    } else {
      localStorage.setItem('Todos', JSON.stringify([]));
      reject('No todos stored yet');
    }
  });
}
function addTodos(todos) {
  return new Promise((resolve, reject) => {
    try {
      localStorage.setItem('Todos', JSON.stringify(todos));
      resolve('todos added to the local storage');
    } catch {
      reject('Problem in adding todos');
    }
  });
}
function updateTodos(id) {
  return new Promise((resolve, reject) => {
    const todos = localStorage.getItem('Todos');
    if (todos && todos.json().length > 0) {
      resolve(todos);
    } else reject('No todos stored yet');
  });
}
function deleteTodos(id) {
  return new Promise((resolve, reject) => {
    const todos = localStorage.getItem('Todos');
    if (todos && todos.json().length > 0) {
      resolve(todos);
    } else reject('No todos stored yet');
  });
}
