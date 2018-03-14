import { combineReducers } from 'redux';

// import each individual reducer
import AuthReducer from './AuthReducer';
import MapReducer from './MapReducer';

// combine the individual reducecrs into
// a single global reducer
export default combineReducers({
  auth: AuthReducer,
  map: MapReducer,
});
