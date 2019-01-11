import { combineReducers } from 'redux';

import manageIdeas from './manageIdeas.js';

const rootReducer = combineReducers({
  ideas: manageIdeas
});

export default rootReducer;
