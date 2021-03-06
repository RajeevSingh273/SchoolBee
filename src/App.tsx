import React, { useState } from "react";
import { MuiThemeProvider, makeStyles } from "@material-ui/core/styles";
import { Banner } from "./components/header";
import { Footer } from "./components/footer";
import { AppBar, CssBaseline } from "@material-ui/core";
import { NavBar } from "./components/header/nevBar";
import { darkTheme, lightTheme } from "./assets/themes";
import { AppRoutes } from "./routes/appRoutes";
import "./App.css";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.palette.primary.contrastText,
  },
  menuButton: {
    marginRight: theme.spacing(10),
  },
  content: {
    flexGrow: 1,
    paddingTop: "48px",
    borderRadius: "0",
  },
  container: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    paddingLeft: 0,
    paddingRight: 0,
    maxWidth: "40%",
  },
  footer: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(1)
  },
}));

const App: React.FC = (): JSX.Element => {
  const classes = useStyles();
  const [darkMode, setDarkMode] = useState(
    window.localStorage.getItem("theme") === "dark"
  );

  return (
    <div className="App">
      <MuiThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        <AppBar>
          <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
        </AppBar>
        <main className={classes.content}>
          <Banner />
          <AppRoutes />
        </main>
        <footer className={classes.footer}>
          <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
        </footer>
      </MuiThemeProvider>
    </div>
  );
};

export default App;
