import React from "react";
import { makeStyles } from "@material-ui/core";
import Homepage from "./Pages/HomePage";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import CoinPage from "./Pages/CoinPage";
import Header from "./components/Header";
import { FormContext } from "./components/context/FormContext";

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}));

function App() {
  const classes = useStyles();

  const [wallet, setWallet] = React.useState("");
  const [access, setAccess] = React.useState("");
  const [open, setOpen] = React.useState(false);

  return (
    <BrowserRouter>
    <FormContext.Provider value={{wallet, setWallet, access, setAccess, open, setOpen}}>
      <div className={classes.App}>
        <Header />
        <Route path="/" component={Homepage} exact />
        <Route path="/coins/:id" component={CoinPage} exact />
      </div>
      </FormContext.Provider>
    </BrowserRouter>
  );
}

export default App;
