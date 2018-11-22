import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { pushView } from "../../actions";
import * as views from "../";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Title = styled.h2`
  margin: 0 auto;
  font-size: 24px;
`;

const ButtonContainer = styled.div`
  flex: 1;
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  height: 4em;
  width: 12em;
  cursor: default;
  user-select: none;
  flex: 1 0 auto;
  margin: 1em;

  :hover {
    outline: rgb(150, 150, 150) solid 3px;
  }
`;

const SpriteIcon = styled.div`
  height: 30px;
  width: 30px;
  overflow: hidden;
  transform: scale(1.4);
  margin: 0 12px;
  background: url(${props => props.src})
    ${props => props.loc.x + "px " + props.loc.y + "px"};
`;

class MainView extends Component {
  static get metadata() {
    return {
      name: "Windows Settings"
    };
  }

  render() {
    const { names } = views;

    return (
      <Container>
        <Title>Windows Settings</Title>
        <ButtonContainer>
          {names.map((name, index) => {
            const { metadata } = views[name];
            return (
              <Button
                key={`btn-${metadata.name}-${index}`}
                onClick={() => this.props.pushView(name)}
              >
                <SpriteIcon
                  src="/images/icons/settings_sprites.svg"
                  loc={metadata.iconSpriteLocation}
                />
                <h3>{metadata.name}</h3>
              </Button>
            );
          })}
        </ButtonContainer>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  desktopState: state.desktopState
});

const mapDispatchtoProps = dispatch => ({
  pushView: view => dispatch(pushView(view))
});

export default connect(mapStateToProps, mapDispatchtoProps)(MainView);
