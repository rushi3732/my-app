import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  ThemeProvider,
  CssBaseline
} from "@material-ui/core";
import { createMuiTheme } from '@material-ui/core/styles';
import { AccountCircle } from "@material-ui/icons";


const Navbar00fixedScrollToHide = () => {
  const theme = createMuiTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    
        <AppBar position="fixed">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <AccountCircle />
            </IconButton>
          </Toolbar>
        </AppBar>
      
      {/* </ElevationScroll03color> */}
    </ThemeProvider>
  );
};

export default Navbar00fixedScrollToHide;
