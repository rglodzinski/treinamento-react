import React, { Component } from "react";

import ThemedButton from "./ThemedButton";
import { themes, ThemeContext } from "./ThemeContext";

const Toolbar = props => {
  return <ThemedButton onClick={props.changeTheme}>Trocar Tema</ThemedButton>;
};

class Contexto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light
    };
    this.toggleTheme = () => {
      this.setState(state => ({
        theme: state.theme === themes.dark ? themes.light : themes.dark
      }));
    };
  }

  render() {
    return (
      <ThemeContext.Provider value={this.state.theme}>
        <Toolbar changeTheme={this.toggleTheme} />
        <br />
        <ThemedButton>BOTÃO COM USO DE TEMA</ThemedButton>
        <br />
        <ThemedButton>OUTRO BOTÃO</ThemedButton>
        <br />
        <button>HTML 5 BUTTON</button>
        <br />
        <button>HTML 5 BUTTON</button>
        <br />
        <button>HTML 5 BUTTON</button>
      </ThemeContext.Provider>
    );
  }
}

export default Contexto;
