import { combineReducers } from '@reduxjs/toolkit';
import users from './usersReducer';
import todos from './todoReducer';

export default combineReducers({ users, todos });
