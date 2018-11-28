import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div`
   position: absolute;
   display: flex;
   flex-direction: column;
   height: ${props => props.height}px;
   width: ${props => props.width}px;
   background: white;
   transition: all 0.15s ease;
   animation: fadeIn 0.2s;
   border: 1px solid dodgerblue;
   box-shadow: 0 0 20px rgb(100,100,100);

   ${props => props.minimized && css`
      transform: translateY(100%);
      opacity: 0;
   `}

   ${props => props.closing && css`
      animation: fadeOut 0.2s;
   `};

   @keyframes fadeIn {
      0% {
         transform: scale(0.85);
         opacity: 0;
      }
   }

   @keyframes fadeOut {
      100% {
         opacity: 0;
         transform: scale(0.85);
      }
   }
`;

class Window extends Component {
   render() {
      const { minimized, closing, height, width } = this.props;

      return (
         <Container height={height} width={width} closing={closing} minimized={minimized}>
            {this.props.children}
         </Container>
      );
   }
}

Window.defaultProps = {
   height: 700,
   width: 700,
}

export default Window;
