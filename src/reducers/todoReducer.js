import { ADD_TODOS, UPDATE_TODOS, DELETE_TODOS } from '../actions/actions.js';
export default function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODOS:
      return [...state, action.payLoad];
    default:
      return state;
  }
}
