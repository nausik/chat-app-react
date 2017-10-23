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
    let input;

    return (
      <div style={footerStyle}>

        <form onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return
          }

          this.props.actions.addMessage(input.value, 'me', 'text');

          input.value = '';
        }}>

          <input

            ref={node => {
              input = node
            }}

            type="text" style={{
            paddingLeft: '10px',
            paddingRight: '10px',
            WebkitAppearance: 'textfield',
            height: '20px',
            width: '100%',
            padding: '0'
          }}/>

        </form>
      </div>
    )
  }
}
