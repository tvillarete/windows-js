import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Window, Titlebar } from '../../toolbox';
import { minimizeApp, closeApp } from '../../task_manager/actions';
import { reset } from './actions';
import * as views from './views';

const ViewContainer = styled.div`
   display: flex;
   flex: 1;
`;

class Settings extends Component {
   static get metadata() {
      return {
         name: 'Settings',
         icon: 'settings.svg',
         type: 'window',
      };
   }

   render() {
      const { settingsState, closing, minimized } = this.props;
      const { viewStack } = settingsState;
      const view = viewStack[viewStack.length - 1];

      return (
         <Window minimized={minimized} closing={closing}>
            <Titlebar
               absolute
               transparent
               onMinimize={() => this.props.minimizeApp('Settings')}
               onClose={() => {this.props.closeApp('Settings'); this.props.reset()}}
            />
            <ViewContainer>
               {React.createElement(views[view])}
            </ViewContainer>
         </Window>
      );
   }
}

const mapStateToProps = state => ({
   settingsState: state.settingsAppState,
});

const mapDispatchToProps = dispatch => ({
   minimizeApp: id => dispatch(minimizeApp(id)),
   closeApp: id => dispatch(closeApp(id)),
   reset: () => dispatch(reset()),
});

export default connect(
   mapStateToProps,
   mapDispatchToProps,
)(Settings);
