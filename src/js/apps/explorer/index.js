import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Window, Titlebar } from '../toolbox';
import { minimizeApp, closeApp } from '../../task_manager/actions';

class Explorer extends Component {
   static get metadata() {
      return {
         name: 'Explorer',
         icon: 'windows.svg',
         type: 'window',
      };
   }

   render() {
      const { minimized } = this.props;

      return (
         <Window minimized={minimized}>
            <Titlebar
               onMinimize={() => this.props.minimizeApp('Explorer')}
               onClose={() => this.props.closeApp('Explorer')}
            />
         </Window>
      );
   }
}

const mapStateToProps = state => ({
   desktopState: state.desktopState,
});

const mapDispatchToProps = dispatch => ({
   minimizeApp: id => dispatch(minimizeApp(id)),
   closeApp: id => dispatch(closeApp(id)),
});

export default connect(
   mapStateToProps,
   mapDispatchToProps,
)(Explorer);
