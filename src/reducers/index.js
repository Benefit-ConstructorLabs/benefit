import { combineReducers } from 'redux';
import donation from './donation';
import recipient from './recipient';

export default combineReducers({
  donation,
  recipient,
});
