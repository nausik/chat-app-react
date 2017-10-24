import React from 'react';

export default class AppFooter extends React.Component {
  render() {
    let input;

    return (
      <div className="footer">

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

            type="text" className="input_field" placeholder="Type your text here"/>

        </form>
      </div>
    )
  }
}
