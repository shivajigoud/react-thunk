import { ADD_TODOS, UPDATE_TODOS, DELETE_TODOS } from './actions.js';

export const addTodo = (payload) => async (dispatch, action) => {
  const currentTodos = await getTodos();
  const newTodos = await currentTodos.then(
    (todso) => ({
      ...currentTodos,
      payload,
    }),
    (error) => {
      console.log(error);
    }
  );
  await addTodos(newTodos);
  dispatch(ADD_TODOS, payload);
};

function getTodos() {
  return new Promise((resolve, reject) => {
    const todos = localStorage.getItem('Todos');
    if (todos && todos.json().length > 0) {
      resolve(todos);
    } else reject('No todos stored yet');
  });
}
function addTodos(todos) {
  return new Promise((resolve, reject) => {
    try {
      localStorage.setItem(JSON.stringify(todos));
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
