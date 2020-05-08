import React, { Component } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/Authorization";
import UpdateProfileForm from "../authentication/forms/UpdateProfileForm";
import EventCards from "../home/EventCards";

import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
// import "./App.css";

export default function PrivatePage() {
  return (
    <AuthContext.Consumer>
      {(context) => {
        // ==================== Page is only displayed when user is logged in ========================
        const { currentUser } = context.state;
        const { handleLogout } = context;

        return (
          <div>
            <Avatar src={currentUser?.path} alt={currentUser?.firstName} />
            <h1>HI, {currentUser?.firstName}! </h1>

            <Button onClick={handleLogout}>Logout</Button>

            <EventCards />

            <UpdateProfileForm />

            <footer>
              <p>Evgenycs Dev Inc 2020</p>
            </footer>
          </div>
        );
      }}
    </AuthContext.Consumer>
  );
}

PrivatePage.contextType = AuthContext;
