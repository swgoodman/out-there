import { combineReducers } from 'redux';

import manageUsers from './manageUsers';
import manageIdeas from './manageIdeas';

const rootReducer = combineReducers({
  user: userReducer,
  ideas: manageIdeas
});

export default rootReducer;
