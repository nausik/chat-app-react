import React from 'react';
import ReactDOM from 'react-dom';
import AppComponent from './AppComponent.jsx';
import {Provider} from 'react-redux';
import store from './store/store';
import faker from './faker/message_faker';

store.subscribe(() => {
  const state = store.getState();
  const lastMessage = state.messages.slice(-1)[0];

  if (lastMessage && lastMessage.message_sender === 'target') {
    return;
  }

  store.dispatch({
    type: 'ADD_MESSAGE',
    message_text: faker(),
    message_sender: 'target',
    message_type: 'text'
  });
});

ReactDOM.render(
  <Provider store={store}>
    <AppComponent/>
  </Provider>,
  document.getElementById('app')
);
