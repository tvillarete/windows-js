import React, { Component } from "react";
import { connect } from "react-redux";
import styled, { css } from "styled-components";
import * as views from "../";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Sidebar = styled.div`
  width: 15em;
`;

const Button = styled.div`
   display: flex;
   align-items: center;
   padding: 12px 0 12px 8px;
   cursor: default;
   border-left: 3px solid transparent;

   :hover {
      background: rgb(230, 230, 230);
   }

   ${props => props.isActive && css`
      border-left: 3px solid dodgerblue;
   `}
`;

const ButtonText = styled.h3`
   margin: 0 0 0 8px;
   font-size: 17px;
`;

const ImgSprite = styled.div`
  height: 30px;
  width: 30px;
  background: url(${props => props.src}) ${props => props.loc.x}px
    ${props => props.loc.y}px no-repeat;
`;

class PersonalizationView extends Component {
  static get metadata() {
    return {
      name: "Personalization",
      iconSpriteLocation: { x: 0, y: 124 }
    };
  }

  state = {
     activeSection: 'BackgroundSection'
  }

  render() {
    const { desktopState } = this.props;
    const { config } = desktopState;

    return (
      <Container>
        <Sidebar>
          <Button>
            <ImgSprite src="images/icons/sidebar_sprites.svg" loc={{ x: 12, y: 7 }} />
            <ButtonText>Home</ButtonText>
          </Button>
        </Sidebar>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  desktopState: state.desktopState
});

export default connect(mapStateToProps)(PersonalizationView);
