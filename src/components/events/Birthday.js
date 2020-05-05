import React from "react";
import { Link, Redirect } from "react-router-dom";

import DatePicker from "../generic/DatePicker";
import { Location } from "../generic/Location";
import "../../App.scss";

export default function Birthday(props) {
  const { date, handleDateChange } = props;

  return (
    <div className="wedding">
      <h1>BIRTHDAY</h1>
      <DatePicker selectedDate={date} handleDateChange={handleDateChange} />
    </div>
  );
}

//const { loggedIn, setStorage, user, date, handleDateChange } = props;
