import { combineReducers } from 'redux';
import donation from './donation';
import recipient from './recipient';
import paymentDetails from './paymentDetails';

export default combineReducers({
  donation,
  paymentDetails,
  recipient,
});
