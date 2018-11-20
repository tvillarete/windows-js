import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Window } from '../toolbox';


class StartMenu extends Component {
   static get metadata() {
      return {
         name: "Start Menu",
         icon: "windows.svg",
         type: "toggle"
      };
   }

   render() {
      const { desktopState } = this.props;
      const { background } = desktopState;

      return (
         <Window>
            <h3>Start Menu</h3>
         </Window>
      );
   }
}

const mapStateToProps = state => ({
   desktopState: state.desktopState,
});

export default connect(mapStateToProps)(StartMenu);
