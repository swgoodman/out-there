import { combineReducers } from 'redux';

import manageUser from './manageUser';
import manageIdeas from './manageIdeas';

const rootReducer = combineReducers({
  user: manageUser,
  ideas: manageIdeas
});

export default rootReducer;
