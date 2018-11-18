import { combineReducers } from 'redux';
import donation from './donation';
import recipient from './recipient';
import paymentDetails from './paymentDetails';
import view from './view';
import donor from './donor';
import login from './login';
import organisation from './organisation';

export default combineReducers({
  donation,
  recipient,
  view,
  paymentDetails,
  donor,
  login,
  organisation,
});
