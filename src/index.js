import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { StripeProvider } from 'react-stripe-elements';
import rootReducer from './reducers';
import App from './components/App';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(rootReducer, composeEnhancers(applyMiddleware(
//   thunkMiddleware,
// )));


const store = createStore(rootReducer, applyMiddleware(
  thunkMiddleware,
));

ReactDOM.render(
  <Provider store={store}>
    <StripeProvider apiKey="pk_test_fy9Zps4yuxSNHtPrVr5vr02d">
      <App />
    </StripeProvider>
  </Provider>,
  document.getElementById('root'),
);
