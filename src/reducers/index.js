import { combineReducers } from 'redux';
import donation from './donation';
import recipient from './recipient';
import paymentDetails from './paymentDetails';
import view from './view';
import qrCodeUrl from './qrCodeUrl';
import donor from './donor';

export default combineReducers({
  donation,
  recipient,
  view,
  paymentDetails,
  qrCodeUrl,
  donor,
});
