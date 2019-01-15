import { combineReducers } from 'redux';

import manageIdeas from './manageIdeas.js';

const rootReducer = combineReducers({
  user: userReducer,
  ideas: manageIdeas
});

export default rootReducer;
