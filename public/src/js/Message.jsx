import React from 'react';

export default class Message extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className={'message ' + (this.props.sender === 'me' ? 'own_message' : 'target_message')}>
        {this.props.content}
      </li>
    )
  }
}