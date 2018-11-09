import { combineReducers } from 'redux';
import donation from './donation';
import recipient from './recipient';
import paymentDetails from './paymentDetails';
import view from './view';
import recipientImageUrl from './recipientImageUrl';
import qrCodeUrl from './qrCodeUrl';

export default combineReducers({
  donation,
  recipient,
  view,
  paymentDetails,
  recipientImageUrl,
  qrCodeUrl,
});
