import React from "react";
import { AuthContext } from "../../context/Authorization";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function LoginForm({ handleLoginInput, handleLoginSubmit }) {
  const classes = useStyles();
  return (
    <AuthContext.Consumer>
      {(context) => {
        console.log(context);
        const { handleLoginSubmit, handleLoginInput, state } = context;
        const { email, password } = state;

        return (
          <div>
            <form onSubmit={handleLoginSubmit}>
              <Input
                type="email"
                name="email"
                placeholder="Your email..."
                value={email}
                onChange={handleLoginInput}
                inputProps={{ "aria-label": "description" }}
              />
              <Input
                type="password"
                name="password"
                placeholder="Your password..."
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
