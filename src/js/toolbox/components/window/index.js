import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div`
   position: absolute;
   display: flex;
   flex-direction: column;
   height: 500px;
   width: 500px;
   background: white;
   transition: all 0.15s ease;
   animation: fadeIn 0.2s;

   ${props => props.minimized && css`
      transform: translateY(100%);
      opacity: 0;
   `}

   @keyframes fadeIn {
      0% {
         transform: scale(0.85);
         opacity: 0;
      }
   }
`;

class Window extends Component {
   render() {
      const { minimized } = this.props;

      return (
         <Container minimized={minimized}>
            {this.props.children}
         </Container>
      );
   }
}

export default Window;
