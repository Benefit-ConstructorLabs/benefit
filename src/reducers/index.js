import { combineReducers } from 'redux';
import donation from './donation';
import recipientPhotoUrl from './recipientPhotoUrl';
import qrCodeUrl from './qrCodeUrl';

export default combineReducers({
  donation,
  recipientPhotoUrl,
  qrCodeUrl
});
