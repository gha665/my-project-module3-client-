import React from "react";
import SignUpForm from "../authentication/SignUpForm";
import LoginForm from "../authentication/LoginForm";
import { ButtonGroup, Button, Grid } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
// import "./App.css";

export default function HomePage() {

    const [selectedDate, setSelectedDate] = React.useState(new Date());

    const handleDateChange = (date) => {
      setSelectedDate(date);
    };


  return (
    <div>
      <LoginForm />

      <h1>PARTYARCH</h1>
      <h3>What's your party?</h3>

      <ButtonGroup size="large" color="primary" aria-label="large outlined primary button group">
        <Button>Conference</Button>
        <Button>Wedding</Button>
        <Button>Birthday</Button>
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
            'aria-label': 'change date',
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>

    
      <h6>New to this? Create your profile!</h6>
      <SignUpForm />

      <footer>
        <p>Evgenycs Dev Inc 2020</p>
      </footer>
    </div>
  );
}