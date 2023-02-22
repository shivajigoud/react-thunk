import { ADD_TODOS, UPDATE_TODOS, DELETE_TODOS } from '../actions/actions.js';
export default function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODOS:
      return [...state, action.payLoad];
    case UPDATE_TODOS:
      const updatedTodos = state.map((v, i, a) => {
        if (v.id == action.payLoad.id) {
          v = action.payLoad;
        }
        return v;
      });
      return [...updatedTodos];
    default:
      return state;
  }
}
