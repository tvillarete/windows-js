import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Drawer } from '../../toolbox';


class StartMenu extends Component {
   static get metadata() {
      return {
         name: "Start Menu",
         icon: "windows.svg",
         type: "toggle"
      };
   }

   render() {
      return (
         <Drawer height="500px" width="1000px">
            <h3>Start Menu</h3>
         </Drawer>
      );
   }
}

const mapStateToProps = state => ({
   desktopState: state.desktopState,
});

export default connect(mapStateToProps)(StartMenu);
