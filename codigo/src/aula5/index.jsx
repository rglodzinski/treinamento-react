import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { ptBR } from "@material-ui/core/locale";

import Menu from "./Layout/Menu";
import Routes from "./routes";

const App = () => {
  const theme = createMuiTheme(
    {
      palette: {
        primary: { main: "#1976d2" }
      }
    },
    ptBR
  );

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <React.Fragment>
          <Menu />
          <br />
          <div className="container">
            <Routes />
          </div>
        </React.Fragment>
      </Router>
    </ThemeProvider>
  );
};

export default App;
