import React from "react";
import { AuthContext } from "../../../context/Authorization";

import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    margin: theme.spacing(1),
  },
}));

export default function LoginForm(props) {
  const classes = useStyles();
  return (
    <AuthContext.Consumer>
      {(context) => {
        const { handleLoginSubmit, handleLoginInput, state } = context;
        const { email, password } = state.formLogin;

        return (
          <div >
            <form onSubmit={handleLoginSubmit} classes={classes.root}>
              <Input
                className={classes.input}
                type="email"
                name="email"
                placeholder="Your email..."
                value={email}
                onChange={handleLoginInput}
                inputProps={{ "aria-label": "description" }}
              />
              <Input
                className={classes.input}
                type="password"
                name="password"
                placeholder="Your password..."
                autoComplete="current-password"
                value={password}
                onChange={handleLoginInput}
                inputProps={{ "aria-label": "description" }}
              />
              <Button
                type="submit"
                onClick={handleLoginSubmit}
                variant="outlined"
                color="primary"
              >
                Login
              </Button>
            </form>
          </div>
        );
      }}
    </AuthContext.Consumer>
  );
}
