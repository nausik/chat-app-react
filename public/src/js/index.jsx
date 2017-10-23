import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './AppHeader.jsx';
import AppFooter from './AppFooter.jsx';
import ChatLog from './ChatLog.jsx';

const layoutStyle = {
    width: '100%',
    height: '100%'
  },
  contentStyle = {
    minHeight: 'calc(100% - 50px)',
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    padding: "10px"
  };

class AppContent extends React.Component {
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

        <ChatLog/>
      </div>
    )
  }
}


class AppComponent extends React.Component {
  render() {
    return (
      <div style={layoutStyle}>
        <AppHeader/>
        <AppContent/>
        <AppFooter/>
      </div>
    );
  }
}

ReactDOM.render(
  <AppComponent/>,
  document.getElementById('app')
);