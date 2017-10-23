import React from 'react';
import ChatLog from './ChatLog.jsx';

const contentStyle = {
  minHeight: 'calc(100% - 50px)',
  display: 'flex',
  flexDirection: 'column',
  boxSizing: 'border-box',
  padding: "10px"
};

export default class AppContent extends React.Component {
  render() {
    return (
      <div style={contentStyle}>
        <div style={{marginTop: 'auto', textAlign: 'center'}}>
          <div>
            <img src="https://garagejournal.com/forum/image.php?groupid=123&dateline=1402521917" alt="avatar"
                 style={{border: '1px solid #aaa', marginBottom: '10px', borderRadius: '50%', width: '100px'}}/>
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
