import { combineReducers } from 'redux';
import manageIdeas from './manageIdeas.js';
import manageUsers from './manageUsers.js';

const rootReducer = combineReducers({
  ideas: manageIdeas,
  users: manageUsers
});

export default rootReducer;
