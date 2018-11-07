import { combineReducers } from 'redux';
import donation from './donation';
import recipientPhotoUrl from './recipientPhotoUrl';

export default combineReducers({
  donation,
  recipientPhotoUrl
});
