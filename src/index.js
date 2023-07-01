import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Cards from './Cards';

ReactDOM.render(
  <Provider store={store}>
    <Cards/>
  </Provider>,
  document.getElementById('root')
);
