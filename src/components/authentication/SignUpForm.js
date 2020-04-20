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
      {/* <form onSubmit={handleSignupSubmit}>
                <label><input name="firstName" placeholder="Your first name..." onChange={handleSignupInput}/></label>
                <label><input name="lastName" placeholder="Your last name..." onChange={handleSignupInput}/></label>
                <label><input name="email" type="email" placeholder="Your email..." onChange={handleSignupInput}/></label>
                <label><input name="password" type="password" placeholder="Your password..." onChange={handleSignupInput}/></label>
                <button>Let's Go!</button>
            </form> */}

      <form className={classes.root} noValidate autoComplete="off">
        <Input
          placeholder="Your first name..."
          inputProps={{ "aria-label": "description" }}
        />
        <Input
          placeholder="Your last name..."
          inputProps={{ "aria-label": "description" }}
        />
        <Input
          placeholder="Your email..."
          type="email"
          onChange={handleSignupInput}
          inputProps={{ "aria-label": "description" }}
        />
        <Input
          placeholder="Your password..."
          type="password"
          onChange={handleSignupInput}
          inputProps={{ "aria-label": "description" }}
        />
        <Button onClick={handleSignupInput} variant="outlined" color="primary">
          Let's Go!
        </Button>
      </form>
    </div>
  );
}
