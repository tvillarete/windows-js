import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div`
   height: 2.1em;
   display: flex;

   ${props => props.absolute && css`
      position: absolute;
      left: 0;
      right: 0;
   `}
`;

const Contents = styled.div`
   display: flex;
   align-items: center;
   padding: 0 0 0 8px;
   flex: 1;
`;

const Actions = styled.div`
   display: flex;
   width: 8em;
`;

const Button = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   flex: 1;
   transition: all 0.15s ease;

   :hover {
      background: rgb(235, 235, 235);
      ${props =>
         props.type === 'close' &&
         css`
            background: red;

            img {
               filter: invert(1) brightness(200%);
            }
         `}
   }

   img {
      margin: auto;
      height: 0.7em;
      width: 0.7em;
   }
`;

class Titlebar extends Component {
   render() {
      const { onMinimize, onMaximize, onClose, absolute, transparent } = this.props;

      return (
         <Container absolute={absolute} transparent={transparent}>
            <Contents>{this.props.children}</Contents>
            <Actions>
               <Button onClick={onMinimize}>
                  <img alt="minimize" src="/images/icons/minimize.svg" />
               </Button>
               <Button onClick={onMaximize}>
                  <img alt="maximize" src="/images/icons/maximize.svg" />
               </Button>
               <Button onClick={onClose} type="close">
                  <img alt="close" src="/images/icons/close.svg" />
               </Button>
            </Actions>
         </Container>
      );
   }
}

Titlebar.defaultProps = {
   onMinimize: () => {},
   onMaximize: () => {},
   onClose: () => {},
   absolute: false,
   transparent: false,
};

export default Titlebar;
