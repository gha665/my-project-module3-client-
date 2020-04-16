import React from "react";
import SignUpForm from "../authentication/SignUpForm";
import LoginForm from "../authentication/LoginForm";
// import "./App.css";

export default function HomePage() {
  return (
    <div>
      <SignUpForm />
      
      <h1>PARTYARCH</h1>
      <h3>What's your party?</h3>

      <div>
        <h4>
          <span>Conference</span>
        </h4>
      </div>

      <div>
        <h4>
          <span>Wedding</span>
        </h4>
      </div>

      <div>
        <h4>
          <span>Birthday</span>
        </h4>
      </div>

      <h6>New to this? Create your profile!</h6>
      <LoginForm />

      <footer>
        <p>Evgenycs Dev Inc 2020</p>
      </footer>
    </div>
  );
}
