import React, { Component } from "react";
import { connect } from "react-redux";
import styled, { css } from "styled-components";

const Container = styled.div`

`;

class BackgroundSection extends Component {
  static get metadata() {
    return {
       name: "Background",
       img: "images/icons/sidebar_sprites.svg",
       imgSpriteLoc: {x: -13, y: 7}
    };
  }

  render() {
    const { desktopState } = this.props;
    const { config } = desktopState;

    return (
      <Container>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  desktopState: state.desktopState
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(BackgroundSection);
