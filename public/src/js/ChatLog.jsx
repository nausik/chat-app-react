import React from 'react';
import Message from './Message.jsx';

export default class ChatLog extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <ul>
        {this.props.messages.map((message, index) =>
          <Message key={index}
                   sender={message.message_sender}
                   content={message.message_text}
                   type={message.message_type}/>
        )}
      </ul>
    )
  }
}
