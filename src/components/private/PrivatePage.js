import React from "react";
import { AuthContext } from "../../context/Authorization";
// mport UpdateProfileForm from "../authentication/forms/UpdateProfileForm";
import EventCards from "../home/EventCards";
import EventsList from "../home/EventsList";
import Footer from "../Footer";

import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";

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

            <EventsList />

            {/* <UpdateProfileForm /> */}

            <Footer />
          </div>
        );
      }}
    </AuthContext.Consumer>
  );
}

PrivatePage.contextType = AuthContext;
