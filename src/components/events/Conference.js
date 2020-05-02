import React from "react";
import { Link, Redirect } from "react-router-dom";

import "../../App.scss";
import { ButtonGroup, Button, Grid } from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

export default function Conference(props) {
  const { loggedIn, setStorage, user } = props;

  //===================== Event Date Handler ========================
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="conference">
      <h1>CONFERENCE</h1>

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
      <button>Date</button>
      <button>Location</button>
      <button>Add ons</button>
      <button>Food</button>

      <Link
        to={{
          pathname: "/privatepage",
          state: {
            userFromLink: user,
          },
        }}
      >
        CHECK OUT
      </Link>
    </div>
  );
}
