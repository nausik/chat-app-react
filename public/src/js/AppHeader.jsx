import React from 'react';

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  height: '50px',
  lineHeight: '50px',
  boxSizing: 'border-box',
  backgroundColor: '#fff',
  opacity: '90%',
  border: '1px solid #ccc',
  position: 'fixed',
  top: '0',
  left: '0'
};

export default class AppHeader extends React.Component {
  render() {
    return (
      <div style={headerStyle}>
        <div style={{paddingLeft: '20px'}}>
          <span className="fa fa-bars"></span>
        </div>
        <div>
          Logo
        </div>
        <div style={{paddingRight: '20px'}}>
          <span className="fa fa-refresh"></span>
        </div>
      </div>
    );
  }
}