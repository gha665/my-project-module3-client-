import React from "react";
import { Link } from "react-router-dom";

import SignUpForm from "../authentication/forms/SignUpForm";
import LoginForm from "../authentication/forms/LoginForm";
// import "../../pics/eventPics";

import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

// import "./App.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
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
        <Paper elevation={10} className={classes.conference}>
          <Link to="events/conference">Conference</Link>
          <br></br>
          <img href="" alt="conference-icon"></img>
        </Paper>
        <Paper elevation={10} className={classes.wedding}>
          <Link to="events/wedding">Wedding</Link>
          <br></br>
          <img href="" alt="wedding-icon"></img>
        </Paper>
        <Paper elevation={10} className={classes.birthday}>
          <Link to="events/birthday">Birthday</Link>
          <br></br>
          <img href="" alt="birthday-icon"></img>
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
