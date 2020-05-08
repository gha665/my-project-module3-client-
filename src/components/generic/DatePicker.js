import React from "react";
import { PartyProvider, PartyContext } from "./../../context/Party";
import "../../App.scss";
import { Grid } from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

class DatePicker extends React.Component {
  render() {
    return (
      <PartyContext.Consumer>
        {(context) => (
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              margin="normal"
              id="date-picker-dialog"
              label="When is your event?"
              format="MM/dd/yyyy"
              value={context.state.selectedDate}
              onChange={context.state.setSelectedDate}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </MuiPickersUtilsProvider>
        )}
      </PartyContext.Consumer>
    );
  }
}
export default DatePicker;
