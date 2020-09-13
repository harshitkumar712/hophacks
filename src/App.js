import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignIn from "./pages/signin/SignIn";
import Register from "./pages/register/Register";
import Volunteer from "./components/volunteer/Volunteer";

import "./App.css";
import HomePage from "./pages/homepage/HomePage";
import Header from "./components/header/Header";
import Cpatient from "./components/cpatient/Cpatient";
import Cdonor from "./components/cdonor/Cdonor";
import DonorDesc from "./components/DonorDesc/DonorDesc";
import CDonate from "./components/Cdonate/CDonate";
import PatientDesc from "./components/PatientDesc/PatientDesc";
import { auth } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;
  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header currentUser={this.state.currentUser} />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/category-patient" component={Cpatient} />
            <Route exact path="/category-donor" component={Cdonor} />
            <Route exact path="/volunteer" component={Volunteer} />

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
}

export default App;
