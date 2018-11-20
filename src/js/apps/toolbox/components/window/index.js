import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
   position: absolute;
   height: 500px;
   width: 500px;
   background: white;
`;

class Window extends Component {
   render() {
      return (
         <Container>
            {this.props.children}
         </Container>
      );
   }
}

export default Window;
