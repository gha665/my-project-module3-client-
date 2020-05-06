import React from "react";
import EventsList from "./EventsList";
import MainAuthForm from "../authentication/authPopUp/MainAuthForm";

import Cuisine from "../generic/Cuisine";
import DatePicker from "../generic/DatePicker";
import Location from "../generic/Location";
import "../../App.scss";
import { ButtonGroup, Button, Grid } from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

export default function WhereAndWhen(props) {
  const { loggedIn, setStorage, user, title, events } = props;

  //===================== Event Date Handler ========================

  return (
    <div className={title}>
      <h1>{title?.toUpperCase()}</h1>
      <div className="eventContainer">
        <DatePicker />
        <Location />
        <Cuisine />
      </div>

      {/* <button>
        <a href="#location">Location</a>
      </button> */}
      <button>Food</button>
      <button>Add ons</button>

      <MainAuthForm />

      {/* <div id={title}>
        <EventsList events={events} />
      </div>  */}
    </div>
  );
}
