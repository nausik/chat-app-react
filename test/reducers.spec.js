import reducer from '../src/reducers/reducers.js';
import expect from 'expect';

describe('Redux Reducers', () => {
  it('has reducer for ADD_MESSAGE action', () => {
    expect(reducer).toBeTruthy();

    const message = {
      id: 3,
      message_text: 'TEST REDUCER',
      message_sender: 'target',
      message_type: 'text',
      type: 'ADD_MESSAGE'
    };

    let state = {
      messages: []
    };

    state = reducer(state, message);

    delete message.type;

    expect(state.messages.pop()).toEqual(message);
  });

});
