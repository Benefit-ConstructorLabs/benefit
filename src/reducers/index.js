import { combineReducers } from 'redux';
import donation from './donation';
import paymentDetails from './paymentDetails';

export default combineReducers({
  donation,
  paymentDetails,
});
