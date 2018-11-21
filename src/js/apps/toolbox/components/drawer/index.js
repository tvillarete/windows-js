import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
   position: fixed;
   bottom: 0;
   left: 0;
   right: 0;
   background: ${props => props.background};
   height: ${props => props.height};
   width: ${props => props.width};
`;

class Drawer extends Component {
   render() {
      const { height, width, background } = this.props;

      return (
         <Container height={height} width={width} background={background}>
            {this.props.children}
         </Container>
      );
   }
}

Drawer.defaultProps = {
   height: '500px',
   width: '500px',
   background: 'black',
};

export default Drawer;
