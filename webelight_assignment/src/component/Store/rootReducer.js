import { combineReducers } from 'redux';
import userReducer from '../Reducer/UserSlice';
import newItemReducer from '../Reducer/UserSlice2';

const rootReducer = combineReducers({
  user: userReducer,
  newItem: newItemReducer,
});

export default rootReducer;
