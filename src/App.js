import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Container } from "@material-ui/core";

import { AuthContext } from "./context/Authorization";
import PartyProvider from "./context/Party";
import HomePage from "./components/home/HomePage";
import PrivatePage from "./components/private/PrivatePage";
import DynamicEvent from "./components/events/DynamicEvent";

import "./App.scss";

function App() {
  const [storage, setStorage] = useState({});

  return (
    <AuthContext.Consumer>
      {(context) => {
        const { state } = context;
        const { currentUser, loggedIn } = state;

        return (
          <div>
            <PartyProvider>
              <Container className="App">
                <Switch>
                  <Route
                    exact
                    path="/homepage"
                    render={(prop) => <HomePage {...prop} />}
                  />
                  <Route
                    exact
                    path="/privatepage"
                    render={(props) =>
                      loggedIn ? (
                        <PrivatePage {...props} user={currentUser} />
                      ) : (
                        <Redirect to="/homepage" />
                      )
                    }
                  />

                  <Route
                    exact
                    path="/events/conference"
                    render={(props) => (
                      <DynamicEvent
                        {...props}
                        // events={eventsData.conference}
                        title="conference"
                        user={currentUser}
                        setStorage={setStorage}
                        loggedIn={loggedIn}
                      />
                    )}
                  />
                  <Route
                    exact
                    path="/events/wedding"
                    render={(props) => (
                      <DynamicEvent
                        {...props}
                        // events={eventsData.wedding}
                        title="wedding"
                        user={currentUser}
                        setStorage={setStorage}
                        loggedIn={loggedIn}
                      />
                    )}
                  />
                  <Route
                    exact
                    path="/events/birthday"
                    render={(props) => (
                      <DynamicEvent
                        {...props}
                        // events={eventsData.birthday}
                        title="birthday"
                        user={currentUser}
                        setStorage={setStorage}
                        loggedIn={loggedIn}
                        storage={storage}
                      />
                    )}
                  />
                  <Redirect to="/homepage" />
                </Switch>
              </Container>
            </PartyProvider>
          </div>
        );
      }}
    </AuthContext.Consumer>
  );
}

export default App;
