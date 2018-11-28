import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Taskbar from './taskbar';
import { init } from '../filesystem/actions';
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
   componentDidMount() {
      this.props.initFs();
   }

   render() {
      const { desktopState, taskState } = this.props;
      const { background } = desktopState;
      const { launched, minimized, closing } = taskState;

      return (
         <Container background={background}>
            <AppContainer>
               {launched.map((app, index) => {
                  const { config } = app;
                  const App = apps[app.id];

                  return React.createElement(App, {
                     key: `app-${app.id}-${app.instance}`,
                     minimized: minimized.includes(app.id),
                     closing: closing.includes(app.id),
                     config 
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

const mapDispatchToProps = dispatch => ({
   initFs: () => dispatch(init()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Desktop);
