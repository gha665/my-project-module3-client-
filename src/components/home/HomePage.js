import React from "react";
import EventCards from "./EventCards";
import EventsList from "./../home/EventsList";

import SignUpForm from "../authentication/forms/SignUpForm";
import LoginForm from "../authentication/forms/LoginForm";

export default function HomePage() {
  return (
    <div>
      <LoginForm />

      <EventCards />

      <EventsList />

      <SignUpForm />

      <footer>
        <p>Made at Ironhack, Miami © 2020</p>
      </footer>
    </div>
  );
}
