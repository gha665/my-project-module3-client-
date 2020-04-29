import React from "react";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import { Container } from "@material-ui/core";

import { AuthContext } from "./context/Authorization";
import HomePage from "./components/home/HomePage";
import PrivatePage from "./components/private/PrivatePage";
import "./App.scss";

function App() {
  return (
    <AuthContext.Consumer>
      {(context) => {
        const { handleLogout, isLoggedIn, state } = context;
        const { currentUser, loggedIn } = state;
        console.log("App -> currentUser", currentUser);
        // console.log("App -> isLoggedIn", isLoggedIn())
        return (
          <div>
            <Container className="App">
              <Link to="/homepage">HOME PAGE</Link>
              <Link to="/privatepage">PRIVATE PAGE</Link>
              <button onClick={handleLogout}>LOGOUT</button>
              {/* <HomePage /> */}

              <Switch>
                <Route exact path="/homepage" render={(prop) => <HomePage />} />
                <Route
                  exact
                  path="/privatepage"
                  render={(prop) =>
                    loggedIn ? <PrivatePage /> : <Redirect to="/homepage" />
                  }
                />
              </Switch>
            </Container>
          </div>
        );
      }}
    </AuthContext.Consumer>
  );
}

export default App;
