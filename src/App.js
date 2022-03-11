import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { Home } from './components/views/homepage/Home.js';

//Themes
import defaultTheme from "./themes/default.json";

//Styles
import "./styles/reset.scss";
import "./styles/fonts/fonts.scss";
import "./styles/config.scss";

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <ThemeProvider theme={defaultTheme}>
          {/* Home */}
          <Home />
      </ThemeProvider>
    );
  }
}