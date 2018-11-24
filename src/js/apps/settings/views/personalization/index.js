import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled, { css } from 'styled-components';
import { reset } from '../../actions';
import * as sections from './sections';

const Container = styled.div`
   display: flex;
   flex: 1;
`;

const Sidebar = styled.div`
   width: 15em;
   padding-top: 2.1em;
   background-color: #e6e6e6;
`;

const Button = styled.div`
   display: flex;
   align-items: center;
   padding: 12px 0 12px 8px;
   cursor: default;
   border-left: 3px solid transparent;

   :hover {
      background: #d4d4d4;
   }

   ${props =>
      props.isActive &&
      css`
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

const SectionContainer = styled.div`
   flex: 1;
   padding: 24px;
   overflow: auto;
`;

const SectionTitle = styled.h2`
   font-size: 1.8em;
   font-weight: normal;
`

class PersonalizationView extends Component {
   static get metadata() {
      return {
         name: 'Personalization',
         iconSpriteLocation: { x: 0, y: 124 },
      };
   }

   state = {
      activeSection: 'BackgroundSection',
   };

   showSection(id) {
      this.setState({ activeSection: id });
   }

   render() {
      const { activeSection } = this.state;
      const { desktopState } = this.props;
      const { config } = desktopState;
      const { names } = sections;
      const Section = sections[this.state.activeSection];

      return (
         <Container>
            <Sidebar color="#e6e6e6">
               <Button onClick={this.props.reset}>
                  <ImgSprite
                     src="images/icons/sidebar_sprites.svg"
                     loc={{ x: 11, y: 7 }}
                  />
                  <ButtonText>Home</ButtonText>
               </Button>
               {names.map((id, index) => {
                  const { metadata } = sections[id];
                  const { name, img, imgSpriteLoc } = metadata;

                  return (
                     <Button
                        key={`sidebar-${id}`}
                        isActive={activeSection === id}
                        onClick={() => this.showSection(id)}>
                        <ImgSprite src={img} loc={imgSpriteLoc} />
                        <ButtonText>{name}</ButtonText>
                     </Button>
                  );
               })}
            </Sidebar>
            <SectionContainer>
               <SectionTitle>{sections[activeSection].metadata.name}</SectionTitle>
               <Section />
            </SectionContainer>
         </Container>
      );
   }
}

const mapStateToProps = state => ({
   desktopState: state.desktopState,
});

const mapDispatchToProps = dispatch => ({
   reset: () => dispatch(reset()),
});

export default connect(
   mapStateToProps,
   mapDispatchToProps,
)(PersonalizationView);
