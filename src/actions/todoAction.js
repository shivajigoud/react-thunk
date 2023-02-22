import { ADD_TODOS, UPDATE_TODOS, DELETE_TODOS} from './actions.js'

export const addTodo = payload => (dispatch,action)=>{
  dispatch(ADD_TODOS,payload)
}