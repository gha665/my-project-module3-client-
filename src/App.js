import React from "react";
import SignUpForm from "./components/authentication/SignUpForm";
import LoginForm from "./components/authentication/LoginForm";
import HomePage from "./components/home/HomePage";
import "./App.css";


function App() {
  return (
    <div className="App">
      <LoginForm />
      <HomePage />
      <SignUpForm />
    </div>
  );
}

export default App;
