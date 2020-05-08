import React from "react";
import EventCards from "./EventCards";

import SignUpForm from "../authentication/forms/SignUpForm";
import LoginForm from "../authentication/forms/LoginForm";

export default function HomePage() {
  return (
    <div>
      <LoginForm />

      <EventCards />

      <h6>New to this? Create your profile!</h6>

      <SignUpForm />

      <footer>
        <p>Evgenycs Dev Inc 2020</p>
      </footer>
    </div>
  );
}
