import React, { Component, createContext } from "react";
import { withRouter } from "react-router-dom";
import AUTH_SERVICE from "../services/AuthService";
import EVENTS_SERVICE from "../services/EventServices";

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
    eventsData: null,
  };

  componentDidMount = () => {
    this.isLoggedIn();
    this.getAllEvents();
  };

  // ================ GET ALL EVENTS from DB
  getAllEvents = async () => {
    try {
      const res = await EVENTS_SERVICE.getEvents();
      console.log("AuthProvider -> getAllEvents -> res", res);
      this.setState({ eventsData: res.data.events });
    } catch (err) {
      console.log(err);
    }
  };

  //=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  // Check if User is in session
  //=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  isLoggedIn = async () => {
    try {
      const { user } = await AUTH_SERVICE.isLoggedIn();
      // console.log("AuthProvider -> isLoggedIn -> user", user);

      this.setState({
        currentUser: user,
        loggedIn: true,
      });
    } catch (err) {
      if (err.response && err.response.data) {
        console.log("MESSAGE", err.response.data.message);

        this.setState((prevState) => ({
          ...prevState,
          message: err.response.data.message,
        }));
      } else {
        console.log(err);
      }
    }
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
      // console.log(this.state.formLogin);

      const {
        data: { user },
      } = await AUTH_SERVICE.login(this.state.formLogin);
      // console.log("AuthProvider -> handleLoginSubmit -> user", user);

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
    // console.log(
    //   "AuthProvider -> handleSignupInput -> value, name",
    //   value,
    //   name
    // );
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
    // console.log("AuthProvider -> handleLoginInput -> value, name", value, name);
    this.setState((prevState) => ({
      formLogin: {
        ...prevState.formLogin,
        [name]: value,
      },
    }));
  };

  //=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  // Logout
  //=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  handleLogout = async () => {
    try {
      // console.log("handleLOGOUT");

      const { message } = await AUTH_SERVICE.logout();
      // console.log("AuthProvider -> isLoggedout -> user", message);

      this.setState({
        message,
        loggedIn: false,
      });
    } catch (err) {
      if (err.response && err.response.data) {
        // console.log("MESSAGE", err.response.data.message);

        this.setState((prevState) => ({
          ...prevState,
          message: err.response.data.message,
        }));
      } else {
        console.log(err);
      }
    }
  };

  render() {
    const {
      state,
      handleLoginInput,
      handleLoginSubmit,
      handleSignupInput,
      handleSignupSubmit,
      isLoggedIn,
      handleLogout,
    } = this;

    return (
      <AuthContext.Provider
        value={{
          state,
          handleLoginInput,
          handleLoginSubmit,
          handleSignupInput,
          handleSignupSubmit,
          isLoggedIn,
          handleLogout,
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
export default withRouter(AuthProvider);
