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

export default function LoginForm({ handleLoginInput, handleLoginSubmit }) {
  const classes = useStyles();

  return (
    <div>
      <form onSubmit={handleLoginSubmit}>
        {/* <label><input name="email" placeholder="Your email..." onChange={handleLoginInput}/></label>
                <label><input name="password" type="password" placeholder="Your password..." onChange={handleLoginInput}/></label> */}
        <Input
          placeholder="Your email..."
          type="email"
          onChange={handleLoginInput}
          inputProps={{ "aria-label": "description" }}
        />
        <Input
          placeholder="Your password..."
          type="password"
          onChange={handleLoginInput}
          inputProps={{ "aria-label": "description" }}
        />
        <Button onClick={handleLoginSubmit} variant="outlined" color="primary">
          Login
        </Button>
      </form>
    </div>
  );
}
