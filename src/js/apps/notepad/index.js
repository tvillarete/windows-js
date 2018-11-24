import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled, { css } from 'styled-components';
import { Window, Titlebar } from '../../toolbox';
import { minimizeApp, closeApp } from '../../task_manager/actions';

const Container = styled.div`
   flex: 1;
   display: flex;
`;

class Notepad extends Component {
   static get metadata() {
      return {
         name: 'Notepad',
         icon: 'explorer.png',
         type: 'window',
      };
   }

   render() {
      const { minimized, fileSystem } = this.props;

      return (
         <Window height={400} width={500} minimized={minimized}>
            <Titlebar
               onMinimize={() => this.props.minimizeApp('Notepad')}
               onClose={() => this.props.closeApp('Notepad')}
            />
            <Container>
               <h3>Notepad</h3>
            </Container>
         </Window>
      );
   }
}

const mapStateToProps = state => ({
   fileSystem: state.fileSystem,
});

const mapDispatchToProps = dispatch => ({
   minimizeApp: id => dispatch(minimizeApp(id)),
   closeApp: id => dispatch(closeApp(id)),
});

export default connect(
   mapStateToProps,
   mapDispatchToProps,
)(Notepad);
