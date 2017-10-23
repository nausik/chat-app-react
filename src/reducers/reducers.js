const messages = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return Object.assign({}, state, {
        messages: state.messages.concat([{
          id: action.id,
          message_text: action.message_text,
          message_sender: action.message_sender,
          message_type: action.message_type
        }])
      });

    default:
      return state;
  }
};

export default messages;
