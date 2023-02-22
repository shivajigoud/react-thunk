import { FETCH_USERS } from './actions';

export const userAPI = (payLoad) => async (dispatch, action) => {
  const usersApi = await fetch('https://gorest.co.in/public/v2/users');
  let users = await usersApi.json();
  console.log(users);
  dispatch({ type: FETCH_USERS, payLoad: users });
};
