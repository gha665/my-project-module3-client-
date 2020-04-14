import React from "react";
import SignUpForm from "./components/authentication/SignUpForm";
import LoginForm from "./components/authentication/LoginForm";
import "./App.css";


function App() {
  return (
    <div className="App">
      <SignUpForm />
      <LoginForm />
    </div>
  );
}

export default App;
