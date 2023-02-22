import {
  ADD_TODOS,
  UPDATE_TODOS,
  DELETE_TODOS,
  FETCH_TODOS,
} from './actions.js';

export const addTodo = (payload) => async (dispatch, action) => {
  const currentTodos = await getTodos();
  const todos = JSON.parse(currentTodos);
  await addTodos([...todos, payload]);
  dispatch({ type: ADD_TODOS, payLoad: payload });
};
export const fetchTodos = () => async (dispatch, action) => {
  const currentTodos = await getTodos();
  const todos = JSON.parse(currentTodos);
  dispatch({ type: FETCH_TODOS, payLoad: todos });
};
export const updateTodo = (payload) => async (dispatch, action) => {
  const currentTodos = await getTodos();
  const todos = JSON.parse(currentTodos);
  const updatedTodos = todos.map((v, i, a) => {
    if (v.id == payload.id) {
      v.inProgress = payload.inProgress;
    }
    return v;
  });
  await updateTodos([...updatedTodos]);
  dispatch({ type: UPDATE_TODOS, payLoad: payload });
};

/*local storage promises*/
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
function updateTodos(todos) {
  return new Promise((resolve, reject) => {
    try {
      localStorage.setItem('Todos', JSON.stringify(todos));
      resolve('todos updated to the local storage');
    } catch {
      reject('Problem in updating todos');
    }
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
