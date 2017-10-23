let nextMessageId = 0;

export const addMessage = (message_text, message_sender, message_type) => {
  return {
    type: "ADD_MESSAGE",
    id: nextMessageId++,
    message_text,
    message_sender,
    message_type
  }
};
