import React from "react";
import axios from "axios";

import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import { AuthContext } from "../../../context/Authorization";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(2),
    },
  },
}));

export const SignUpForm = () => {
  const classes = useStyles();

  return (
    <AuthContext.Consumer>
      {(context) => {
        // console.log("SignUpForm -> context", context);
        const { handleSignupSubmit, handleSignupInput, state } = context;
        const { firstName, lastName, email, password } = state.formSignup;

        return (
          <div>
            <form onSubmit={handleSignupSubmit} noValidate autoComplete="off">
              <Input
                id="firstName"
                name="firstName"
                onChange={handleSignupInput}
                value={firstName}
                placeholder="Your first name..."
                inputProps={{ "aria-label": "description" }}
              />
              <Input
                id="lastName"
                name="lastName"
                onChange={handleSignupInput}
                value={lastName}
                placeholder="Your last name..."
                inputProps={{ "aria-label": "description" }}
              />
              <Input
                type="email"
                name="email"
                placeholder="Your email..."
                onChange={handleSignupInput}
                value={email}
                inputProps={{ "aria-label": "description" }}
              />
              <Input
                type="password"
                name="password"
                placeholder="Your password..."
                onChange={handleSignupInput}
                value={password}
                inputProps={{ "aria-label": "description" }}
              />
              <Button
                // onClick={this.handleSubmit}
                type="submit"
                variant="outlined"
                color="primary"
              >
                Let's Go!
              </Button>
            </form>
          </div>
        );
      }}
    </AuthContext.Consumer>
  );
};

export default SignUpForm;
// SignUpForm.contextType = AuthContext .Consumer(???);
