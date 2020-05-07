import React, { Component } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/Authorization";
import UpdateProfileForm from "../authentication/forms/UpdateProfileForm";

import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

import { ButtonGroup, Button, Grid } from "@material-ui/core";

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

export default class PrivatePage extends Component {
  render() {
    // ==================== Page is only displayed when user is logged in ========================
    const { currentUser } = this.context.state;
    // const userFromLink = this.props.location.state?.userFromLink;

    const classes = useStyles();

    return (
      <div>
        <h1>HI, {currentUser?.firstName}! </h1>

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

        {/* <ButtonGroup
          size="large"
          color="primary"
          aria-label="large outlined primary button group"
        >
          <Button>
            <Link to="events/conference">Conference</Link>
          </Button>
          <Button>
            <Link to="events/wedding">Wedding</Link>
          </Button>
          <Button>
            <Link to="events/birthday">Birthday</Link>
          </Button>
        </ButtonGroup> */}

        <UpdateProfileForm />

        <footer>
          <p>Evgenycs Dev Inc 2020</p>
        </footer>
      </div>
    );
  }
}

PrivatePage.contextType = AuthContext;
