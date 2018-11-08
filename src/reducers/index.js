import { combineReducers } from 'redux';
import donation from './donation';
import recipient from './recipient';
import paymentDetails from './paymentDetails';
import recipientPhotoUrl from './recipientPhotoUrl';
import qrCodeUrl from './qrCodeUrl';

export default combineReducers({
  donation,
  recipient,
  paymentDetails,
  recipientPhotoUrl,
  qrCodeUrl,
});
