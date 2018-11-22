import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled, { css } from 'styled-components';
import { launchApp, closeApp, minimizeApp } from '../../task_manager/actions';
import * as apps from '../../apps';

const Container = styled.div`
   display: flex;
   height: 3em;
   background: black;
   color: white;
`;

const IconButton = styled.div`
   position: relative;
   display: flex;
   justify-content: center;
   align-items: center;
   width: 3em;
   transition: background 0.1s;
   border-bottom: 2px solid transparent;

   ${props =>
      props.isActive &&
      css`
         background: rgb(50, 50, 50);
         border-bottom: 2px solid dodgerblue;
      `}

   ${props =>
      props.isMinimized &&
      css`
         background: transparent;
      `}

   :hover {
      background: ${props =>
         props.isMinimized ? 'rgb(30, 30, 30)' : 'rgb(50, 50, 50)'};
   }

   img {
      max-height: 40%;
   }
`;

class Taskbar extends Component {
   render() {
      const { taskbarState, taskState } = this.props;
      const { icons } = taskbarState;
      const { launched, minimized } = taskState;

      return (
         <Container>
            {icons.map((id, index) => {
               const { metadata } = apps[id];
               const { type } = metadata;
               return (
                  <IconButton
                     isActive={launched.includes(id) && type !== 'toggle'}
                     isMinimized={minimized.includes(id)}
                     key={`tb-icon-${id}`}
                     onClick={() =>
                        launched.includes(id)
                           ? type === 'toggle'
                              ? this.props.closeApp(id)
                              : this.props.minimizeApp(id)
                           : this.props.launchApp(id)
                     }>
                     <img alt={metadata.name} src={`images/${apps[id].metadata.icon}`} />
                  </IconButton>
               );
            })}
         </Container>
      );
   }
}

const mapStateToProps = state => ({
   desktopState: state.desktopState,
   taskbarState: state.taskbarState,
   taskState: state.taskState,
});

const mapDispatchToProps = dispatch => ({
   launchApp: id => dispatch(launchApp(id)),
   closeApp: id => dispatch(closeApp(id)),
   minimizeApp: id => dispatch(minimizeApp(id)),
});

export default connect(
   mapStateToProps,
   mapDispatchToProps,
)(Taskbar);
