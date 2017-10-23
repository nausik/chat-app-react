import Reducers from '../reducers/reducers';
import {createStore} from 'redux';

const store = createStore(Reducers, {
  messages: [
    {
      id: 0,
      message_text: 'Predefined Default Message in store/index.js',
      message_sender: 'me',
      message_type: 'text'
    },
    {
      id: 1,
      message_text: 'lorem ipsum si dolor, sudo make a sandwich',
      message_sender: 'target',
      message_type: 'text'
    }
  ]
});

export default store;
