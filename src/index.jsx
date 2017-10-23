import React from 'react';
import ReactDOM from 'react-dom';
import AppComponent from './AppComponent.jsx';
import {Provider} from 'react-redux';
import store from './store/store';

ReactDOM.render(
  <Provider store={store}>
    <AppComponent/>
  </Provider>,
  document.getElementById('app')
);
