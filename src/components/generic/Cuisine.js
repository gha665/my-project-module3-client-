import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import InputLabel from "@material-ui/core/InputLabel";
// import MenuItem from "@material-ui/core/MenuItem";
// import ListSubheader from "@material-ui/core/ListSubheader";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import { PartyContext } from "./../../context/Party";
import foodData from "../../foodData.json";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

function Options(options) {
  const foodOptions = options.options.food;
  return foodOptions.map((option) => {
    return (
      <optgroup label={option.origin}>
        {option.menu.map((item) => (
          <option value={item}>{item}</option>
        ))}
      </optgroup>
    );
  });
}

function Cuisine({ foodOptions }) {
  const classes = useStyles();
  return (
    <PartyContext.Consumer>
      {(context) => (
        <div>
          <FormControl className={classes.formControl}>
            <Select
              defaultValue=""
              id="grouped-native-select"
              value={context.state.cuisine ? context.state.cuisine : ""}
              onChange={context.state.setSelectedCuisine}
              native
            >
              <Options options={foodData} />
            </Select>
          </FormControl>
        </div>
      )}
    </PartyContext.Consumer>
  );
}

export default Cuisine;
