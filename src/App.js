import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignIn from "./pages/signin/SignIn";
import Register from "./pages/register/Register";

import "./App.css";
import HomePage from "./pages/homepage/HomePage";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
