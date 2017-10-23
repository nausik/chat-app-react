import React from 'react';
import Message from './Message.jsx';

export default class ChatLog extends React.Component {
  constructor() {
    super();

    this.state = {
      messages: [{
        type: 'text',
        content: 'Hi!',
        sender: 'me'
      }, {
        type: 'text',
        content: 'Nice to meet you',
        sender: 'target'
      }]
    };
  }

  render() {
    return (
      <ul>
        {this.state.messages.map((message, index) =>
          <Message key={index} sender={message.sender} content={message.content} type={message.type}/>
        )}
      </ul>
    )
  }
}