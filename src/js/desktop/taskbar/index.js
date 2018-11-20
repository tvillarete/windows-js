import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
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

   :hover {
      background: rgb(50, 50, 50);
   }

   img {
      max-height: 40%;
   }
`;

class Taskbar extends Component {
   render() {
      const { taskbarState } = this.props;
      const { icons } = taskbarState;

      return (
         <Container>
            {icons.map((name, index) => (
               <IconButton>
                  <img src={`images/${apps[name].metadata.icon}`} />
               </IconButton>
            ))}
         </Container>
      );
   }
}

const mapStateToProps = state => ({
   desktopState: state.desktopState,
   taskbarState: state.taskbarState
});

export default connect(mapStateToProps)(Taskbar);
