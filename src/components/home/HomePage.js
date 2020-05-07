import React from "react";
import { Link } from "react-router-dom";

import SignUpForm from "../authentication/forms/SignUpForm";
import LoginForm from "../authentication/forms/LoginForm";

import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

// import "./App.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(5),
      width: theme.spacing(40),
      height: theme.spacing(40),
    },
  },
  conference: {
    backgroundColor: "#a8d0e6",
    border: "3px solid black",
  },
  wedding: {
    backgroundColor: "#f8e9a1",
    border: "3px solid black",
  },
  birthday: {
    backgroundColor: "#f76c6c",
    border: "3px solid black",
  },
}));

export default function HomePage(props) {
  const classes = useStyles();

  return (
    <div>
      <LoginForm />

      <h1>PARTYARCH</h1>

      <h3>What's your party?</h3>

      <div className={classes.root}>
        <Paper elevation={1} className={classes.conference}>
          <Link to="events/conference">Conference</Link>
        </Paper>

        <Paper elevation={1} className={classes.wedding}>
          <Link to="events/wedding">Wedding</Link>
        </Paper>
        <Paper elevation={1} className={classes.birthday}>
          <Link to="events/birthday">Birthday</Link>
        </Paper>
      </div>

      <h6>New to this? Create your profile!</h6>

      <SignUpForm />

      <footer>
        <p>Evgenycs Dev Inc 2020</p>
      </footer>
    </div>
  );
}
