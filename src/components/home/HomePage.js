import React from "react";
import { Link } from "react-router-dom";

import SignUpForm from "../authentication/SignUpForm";
import LoginForm from "../authentication/LoginForm";
import UpdateProfileForm from "../authentication/UpdateProfileForm";

import { ButtonGroup, Button, Grid } from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
// import "./App.css";

export default function HomePage(props) {
  console.log("HomePage -> props", props);
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
          <Link to="events/conference">Wedding</Link>
        </Button>
        <Button>
          <Link to="events/conference">Birthday</Link>
        </Button>
      </ButtonGroup>

      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify="space-around">
          <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
            label="When is your event?"
            format="MM/dd/yyyy"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
        </Grid>
      </MuiPickersUtilsProvider>

      <h6>New to this? Create your profile!</h6>

      <SignUpForm />

      {/* <UpdateProfileForm /> */}

      <footer>
        <p>Evgenycs Dev Inc 2020</p>
      </footer>
    </div>
  );
}
