import React from 'react';

const footerStyle = {
  width: '100%',
  height: '50px',
  lineHeight: '50px',
  paddingLeft: '10px',
  boxSizing: 'border-box',
  paddingRight: '10px'
};

export default class AppFooter extends React.Component {
  render() {
    return (
      <div style={footerStyle}>
        <input type="date" style={{
          paddingLeft: '10px',
          paddingRight: '10px',
          WebkitAppearance: 'textfield',
          height: '20px',
          width: '100%',
          padding: '0'
        }}/>
      </div>
    )
  }
}