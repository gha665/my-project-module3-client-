import React, { Component } from "react";
import { Link } from "react-router-dom";

import UpdateProfileForm from "../authentication/forms/UpdateProfileForm";

import { ButtonGroup, Button, Grid } from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
// import "./App.css";

export default class PrivatePage extends Component {
  render() {
    // ==================== Page is only displayed when user is logged in ========================
    const { user } = this.props;
    const userFromLink = this.props.location.state?.userFromLink;

    //===================== Event Date Handler ========================
    // const [selectedDate, setSelectedDate] = React.useState(new Date());
    // const handleDateChange = (date) => {
    //   setSelectedDate(date);
    // };

    return (
      <div>
        <h1>HI, {userFromLink?.firstName}! </h1>

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

        {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justify="space-around">
            <KeyboardDatePicker
              margin="normal"
              id="date-picker-dialog"
              label="When is your event?"
              format="MM/dd/yyyy"
              // value={selectedDate}
              // onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </Grid>
        </MuiPickersUtilsProvider> */}

        <UpdateProfileForm />

        <footer>
          <p>Evgenycs Dev Inc 2020</p>
        </footer>
      </div>
    );
  }
}
