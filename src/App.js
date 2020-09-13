import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignIn from "./pages/signin/SignIn";
import Register from "./pages/register/Register";

import "./App.css";
import HomePage from "./pages/homepage/HomePage";
import Header from "./components/header/Header";
import Cpatient from "./components/cpatient/Cpatient";
import Cdonor from "./components/cdonor/Cdonor";
import DonorDesc from "./components/DonorDesc/DonorDesc";
import CDonate from "./components/Cdonate/CDonate";
import PatientDesc from "./components/PatientDesc/PatientDesc";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/category-patient" component={Cpatient} />
          <Route exact path="/category-donor" component={Cdonor} />

          <Route
            exact
            path="/category-donor/category-description-donor"
            component={DonorDesc}
          />
          <Route
            exact
            path="/category-patient/category-description-patient/submit"
            component={CDonate}
          />
          <Route
            exact
            path="/category-patient/category-description-patient"
            component={PatientDesc}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
