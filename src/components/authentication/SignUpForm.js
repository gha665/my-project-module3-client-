import React from "react";
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

export default function SignUpForm({ handleSignupInput, handleSignupSubmit }) {
  const classes = useStyles();

  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <Input
          id="firstName"
          placeholder="Your first name..."
          inputProps={{ "aria-label": "description" }}
        />
        <Input
          id="lastName"
          placeholder="Your last name..."
          inputProps={{ "aria-label": "description" }}
        />
        <Input
          type="email"
          placeholder="Your email..."
          onChange={handleSignupInput}
          inputProps={{ "aria-label": "description" }}
        />
        <Input
          type="password"
          placeholder="Your password..."
          onChange={handleSignupInput}
          inputProps={{ "aria-label": "description" }}
        />
        <Button onClick={handleSignupSubmit} variant="outlined" color="primary">
          Let's Go!
        </Button>
      </form>
    </div>
  );
}
