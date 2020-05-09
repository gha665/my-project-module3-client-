import React from "react";
import { Link } from "react-router-dom";

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
    textDecoration: "none"
  },
  conference: {
    backgroundColor: "#a8d0e6",
    border: "3px solid black",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  wedding: {
    backgroundColor: "#f8e9a1",
    border: "3px solid black",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  birthday: {
    backgroundColor: "#f76c6c",
    border: "3px solid black",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  eventPic: {
    width: "100%",
    maxWidth: "150px",
    maxHeight: "150px",
    marginTop: "10px"
  },
}));

export default function EventCards() {
  const classes = useStyles();

  return (
    <div>
      <h1>PARTYARCH</h1>

      <h3>What's your party?</h3>

      <div className={classes.root}>
        <Paper elevation={10} className={classes.conference}>
          <Link to="events/conference">Conference</Link>
          <img
            className={classes.eventPic}
            src="/pics/eventPics/conference-icon.png"
            alt="conference-icon"
          ></img>
        </Paper>
        <Paper elevation={10} className={classes.wedding}>
          <Link to="events/wedding">Wedding</Link>
          <img
            className={classes.eventPic}
            src="/pics/eventPics/wedding-icon.png"
            alt="wedding-icon"
          ></img>
        </Paper>
        <Paper elevation={10} className={classes.birthday}>
          <Link to="events/birthday">Birthday</Link>
          <img
            className={classes.eventPic}
            src="/pics/eventPics/birthday-icon.png"
            alt="birthday-icon"
          ></img>
        </Paper>
      </div>
    </div>
  );
}
