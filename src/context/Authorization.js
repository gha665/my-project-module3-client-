import React, { Component, createContext } from "react";
import { withRouter } from "react-router-dom";
import AUTH_SERVICE from "../services/AuthService";

export const AuthContext = createContext();
export class AuthProvider extends Component {
  state = {
    currentUser: null,
    formSignup: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    formLogin: { email: "", password: "" },
    loggedIn: false,
    isLoading: true,
    message: false,
  };

  //=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  // Signup Submit
  //=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  handleSignupSubmit = async (e) => {
    e.preventDefault();
    try {
      this.setState({ isLoading: true, message: "Signing up..." });
      const {
        data: { user },
      } = await AUTH_SERVICE.signup(this.state.formSignup);

      this.setState((prevState) => ({
        ...prevState,
        formSignup: {
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        },
        currentUser: user,
        loggedIn: true,
      }));
    } catch (err) {
      console.log(err);
      //   this.displayError(err);
    }
  };

  //=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  // Login Submit
  //=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      // this.setState({ isLoading: true, message: "Logging in..." });
      const {
        data: { user },
      } = await AUTH_SERVICE.login(this.state.formLogin);

      this.setState((prevState) => ({
        ...prevState,
        formLogin: {
          ...prevState.formLogin,
          email: "",
          password: "",
        },
        currentUser: user,
        loggedIn: true,
      }));
    } catch (err) {
      console.log(err);
      //   this.displayError(err);
    }
  };

  //=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  // Sign Up Input
  //=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  handleSignupInput = (e) => {
    const { value, name } = e.target;
    this.setState((prevState) => ({
      formSignup: {
        ...prevState.formSignup,
        [name]: value,
      },
    }));
  };
  //=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  // Login Input
  //=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  handleLoginInput = (e) => {
    const { value, name } = e.target;
    this.setState((prevState) => ({
      formLogin: {
        ...prevState.formLogin,
        [name]: value,
      },
    }));
  };

  render() {
    const {
      state,
      handleLoginInput,
      handleLoginSubmit,
      handleSignupInput,
      handleSignupSubmit,
    } = this;

    return (
      <AuthContext.Provider
        value={{
          state,
          handleLoginInput,
          handleLoginSubmit,
          handleSignupInput,
          handleSignupSubmit,
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
export default withRouter(AuthProvider);
