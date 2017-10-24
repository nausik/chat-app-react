import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'


export default class Message extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ReactCSSTransitionGroup transitionName="anim" transitionAppear={true} transitionAppearTimeout={500}
                               transitionEnter={false} transitionLeave={false}>
        <li className={'message ' + (this.props.sender === 'me' ? 'own_message' : 'target_message')}>
          {this.props.content}
        </li>
      </ReactCSSTransitionGroup>
    )
  }
}