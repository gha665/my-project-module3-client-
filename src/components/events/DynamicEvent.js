import React from "react";
import Location from "../Location";
import EventsList from "./EventsList";
import MainAuthForm from "../authentication/authPopUp/MainAuthForm";

import "../../App.scss";
import { ButtonGroup, Button, Grid } from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

import GoogleMaps from "./GoogleLocation";

export default function WhereAndWhen(props) {
  const { loggedIn, setStorage, user, title, events } = props;

  //===================== Event Date Handler ========================
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className={title}>
      <h1>{title?.toUpperCase()}</h1>

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

      <GoogleMaps></GoogleMaps>

      {/* <button>
        <a href="#location">Location</a>
      </button> */}
      <button>Food</button>
      <button>Add ons</button>

      <MainAuthForm />

      <div id={title}>
        <EventsList events={events} />
      </div>
      {/* 
      <div id="location">
        <Location />
      </div> */}
    </div>
  );
}
