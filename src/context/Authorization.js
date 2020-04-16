import React, { Component, createContext } from "react";
import { withRouter } from "react-router-dom";
import AUTH_SERVICE from "../services/auth/AuthServices";

export const AuthContext = createContext();
export class AuthProvider extends Component {
  state = {
    currentUser: null,
    formSignup: {
      username: "",
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
  // Signup
  //=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  handleSignupSubmit = async (e) => {
    e.preventDefault();
    try {
      this.setState({ isLoading: true, message: "Signing up..." });
      const res = await AUTH_SERVICE.signup(this.state.formSignup);
      const {
        data: { user },
      } = res;
      this.setState((prevState) => ({
        ...prevState,
        formSignup: {
          username: "",
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        },
        user,
        loggedIn: true,
      }));
      //   setTimeout(() => {
      //     this.setState({ isLoading: false });
      //     this.props.history.push("/home");
      //   }, 2000);
    } catch (err) {
      console.log(err);
      //   this.displayError(err);
    }
  };

  //=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  // Login
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
