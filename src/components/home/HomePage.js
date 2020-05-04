import React from "react";
import { Link } from "react-router-dom";

import SignUpForm from "../authentication/forms/SignUpForm";
import LoginForm from "../authentication/forms/LoginForm";
// import UpdateProfileForm from "../authentication/UpdateProfileForm";

import { ButtonGroup, Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";

// import DateFnsUtils from "@date-io/date-fns";
// import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
// import "./App.css";


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    // width: 500,
    height: 450,
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
}));


export default function HomePage(props) {
  //===================== Event Date Handler ========================
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <LoginForm />

      <h1>PARTYARCH</h1>

      <h3>What's your party?</h3>

      <ButtonGroup
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
      </ButtonGroup>

      {/* <div className={classes.root}>
        <GridList cellHeight={180} className={classes.gridList}>
          <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
            <ListSubheader component="div">Conference</ListSubheader>May
          </GridListTile>
          {events?.map((event) => (
            <GridListTile key={event.thumbnail_url}>
              <img src={event.thumbnail_url} alt={event.title} />
              <GridListTileBar
                title={event.title}
                subtitle={<span>by: {event.origin}</span>}
                actionIcon={
                  <IconButton
                    aria-label={`info about ${event.title}`}
                    className={classes.icon}
                  >
                    <InfoIcon />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </div> */}

      <h6>New to this? Create your profile!</h6>

      <SignUpForm />

      {/* <UpdateProfileForm /> */}

      <footer>
        <p>Evgenycs Dev Inc 2020</p>
      </footer>
    </div>
  );
}
