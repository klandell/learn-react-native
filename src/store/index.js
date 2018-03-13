import { applyMiddleware, createStore } from 'redux';
import reducer from '../reducers';

// Export our global redux store
const middleware = [];
export default createStore(reducer, applyMiddleware(...middleware));
