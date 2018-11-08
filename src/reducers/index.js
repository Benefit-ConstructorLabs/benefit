import { combineReducers } from 'redux';
import donation from './donation';
import recipient from './recipient';
import paymentDetails from './paymentDetails';
import view from './view';

export default combineReducers({
  donation,
  paymentDetails,
  recipient,
  view,
});
