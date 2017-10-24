import React from 'react';
import ChatLog from './ChatLog.jsx';

export default class AppContent extends React.Component {
  render() {
    return (
      <div className="content">
        <div style={{marginTop: 'auto', textAlign: 'center'}}>
          <div>
            <img src="https://garagejournal.com/forum/image.php?groupid=123&dateline=1402521917" alt="avatar" className="avatar" />
          </div>
          <div>
            Cool profile
          </div>
        </div>

        <ChatLog messages={this.props.messages}/>
      </div>
    )
  }
}
