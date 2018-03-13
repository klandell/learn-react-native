import { combineReducers } from 'redux';

// import each individual reducer
import AuthReducer from './AuthReducer';

// combine the individual reducecrs into
// a single global reducer
export default combineReducers({
  auth: AuthReducer,
});
