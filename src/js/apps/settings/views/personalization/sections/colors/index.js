import React, { Component } from "react";
import { connect } from "react-redux";
import styled, { css } from "styled-components";

const Container = styled.div`

`;

class ColorSection extends Component {
  static get metadata() {
    return {
      name: "Colors",
       img: "images/icons/sidebar_sprites.svg",
       imgSpriteLoc: {x: -13, y: 7}
    };
  }

  render() {
    const { desktopState } = this.props;
    const { config } = desktopState;

    return (
      <Container>
         <h3>Colors</h3>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  desktopState: state.desktopState
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(ColorSection);
