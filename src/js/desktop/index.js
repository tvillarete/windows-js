import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Taskbar from './taskbar';
import * as apps from '../apps';

const Container = styled.div`
   position: fixed;
   display: flex;
   flex-direction: column;
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   background: url("${props => props.background}") no-repeat center;
   background-size: cover;
`;

const AppContainer = styled.div`
   flex: 1;
`;

class Desktop extends Component {
   render() {
      const { desktopState, taskState } = this.props;
      const { background } = desktopState;
      const { launched, minimized } = taskState;
      console.log(launched);

      return (
         <Container background={background}>
            <AppContainer>
               {launched.map((app, index) => {
                  console.log(app);
                  const App = apps[app.id];
                  return React.createElement(App, {
                     key: `app-${app.id}-${app.instance}`,
                     minimized: minimized.includes(app.id)
                  })
               })}
            </AppContainer>
            <Taskbar />
         </Container>
      );
   }
}

const mapStateToProps = state => ({
   desktopState: state.desktopState,
   taskState: state.taskState,
});

export default connect(mapStateToProps)(Desktop);
