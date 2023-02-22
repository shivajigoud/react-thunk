import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userAPI } from './actions/usersAction';
import './style.css';

export default function App() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    //IIFE used for async it is similar as thunk
    // (async () => {
    //   const usersApi = await fetch('https://gorest.co.in/public/v2/users');
    //   let users = await usersApi.json();
    //   console.log(users);
    //   dispatch({ type: FETCH_USERS, payLoad: users });
    // })();

    // without async it fails as users return promise which is not resolved or rejected yet
    // const usersApi = fetch('https://gorest.co.in/public/v2/users');
    // let users = usersApi.then((response) => response.json());
    // dispatch({ type: FETCH_USERS, payLoad: users });

    //with thunk
    dispatch(userAPI(users));
  }, []);
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <ul>
        {users &&
          users.map((data, i) => {
            return <li key={`user${i}`}>{data.email}</li>;
          })}
      </ul>
    </div>
  );
}
