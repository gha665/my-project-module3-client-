import React from "react";
import { Container } from '@material-ui/core';
import SignUpForm from "./components/authentication/SignUpForm";
import LoginForm from "./components/authentication/LoginForm";
import HomePage from "./components/home/HomePage";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Container>
      <HomePage />
      </Container>
  
     
    </div>
  );
}

export default App;
