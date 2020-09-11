import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";

import Home from "./components/Home";
import Header from "./components/Header";
import Login from "./components/Login";

function App() {
  let history = useHistory();
  const [token, setToken] = useState(undefined);
  useEffect(() => {
    const localToken = window.localStorage.getItem("token");
    console.log(localToken);
    if (localToken !== "undefined") {
      setToken(localToken);
      history.push("/candy");
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/login" component={Login} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
