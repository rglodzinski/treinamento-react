import React from "react";

import { ThemeContext } from "./ThemeContext";

class ThemedButton extends React.Component {
  render() {
    let props = this.props;
    let theme = this.context;
    return (
      <button
        {...props}
        style={{ backgroundColor: theme.background, fontSize: theme.fontSize }}
      />
    );
  }
}

ThemedButton.contextType = ThemeContext;

export default ThemedButton;
