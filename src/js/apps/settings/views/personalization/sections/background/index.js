import React, { Component } from "react";
import { connect } from "react-redux";
import { changeBackground } from '../../../../../../desktop/actions';
import styled from "styled-components";

const Container = styled.div`

`;

const Icon = styled.div`
   height: 5em;
   width: 5em;
   background: url(${props => props.src}) center center fixed;
   background-size: contain;
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
    const { changeBackground } = this.props;

    return (
      <Container>
         <Icon onClick={() => changeBackground('C/Pictures/Wallpapers/Firewatch.jpg')} src="/C/Pictures/Wallpapers/Firewatch.jpg" />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  desktopState: state.desktopState
});

const mapDispatchToProps = dispatch => ({
   changeBackground: background => dispatch(changeBackground(background)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BackgroundSection);
