import React from "react";
import EventCards from "./EventCards";
import EventsList from "./../home/EventsList";
import Footer from "../Footer";

import SignUpForm from "../authentication/forms/SignUpForm";
import LoginForm from "../authentication/forms/LoginForm";

export default function HomePage() {
  return (
    <div>
      <LoginForm />

      <EventCards />

      <EventsList />

      <SignUpForm />

      <Footer />
    </div>
  );
}
