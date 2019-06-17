import { combineReducers } from 'redux';

import modal from './modal';
import user from './user';

const reducers = combineReducers({
  modal,
  user,
});

export default reducers;
