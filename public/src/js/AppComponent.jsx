import AppHeader from './AppHeader.jsx';
import AppFooter from './AppFooter.jsx';
import AppContent from './AppContent.jsx';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as ChatActions from './actions/actions';
import React from 'react';

const layoutStyle = {
  width: '100%',
  height: '100%'
};

export class AppComponent extends React.Component {
  render() {
    return (
      <div style={layoutStyle}>
        <AppHeader/>
        <AppContent messages={this.props.messages}/>
        <AppFooter actions={this.props.actions}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ChatActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppComponent);
