import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userAPI } from './actions/usersAction';
import './style.css';

export default function App() {
  const users = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  useEffect(() => {
    
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
