/* eslint-disable no-use-before-define */

import React from "react";
import Avatar from "./Avatar";

import { PartyProvider, PartyContext } from "../context/Party";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function CheckboxesTags({ data }) {
  return (
    <PartyContext.Consumer>
      {(context) => (
        <Autocomplete
          multiple
          id="checkboxes-tags-demo"
          options={data}
          disableCloseOnSelect
          getOptionLabel={(option) =>
            `${option.category} ${option.title} ${option.price}`
          }
          renderOption={(option, { selected }) => (
            <React.Fragment>
              <Checkbox
                icon={icon}
                checkedIcon={checkedIcon}
                style={{ marginRight: 8 }}
                checked={selected}
                onChange={context.state.setSelectedAddOn}
                value={selected}
              />
              {` ${option.title} $${option.price}`}
              <Avatar src={option.thumbnail_url} size={"large"} />
            </React.Fragment>
          )}
          style={{ width: 300 }}
          renderInput={(params) => (
            <TextField
              {...params}
              //   variant="outlined"
              label="Checkboxes"
              placeholder="Favorites"
            />
          )}
        />
      )}
    </PartyContext.Consumer>
  );
}
