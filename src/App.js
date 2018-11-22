import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components';
import Windows from './js';

const GlobalStyle = createGlobalStyle`
   html {
      font-family: sans-serif;
   }
   h3, h4, h5, h6 {
      font-weight: normal;
   }
`;

class App extends Component {
  render() {
    return (
      <div className="App">
         <GlobalStyle />
         <Windows />
      </div>
    );
  }
}

export default App;
