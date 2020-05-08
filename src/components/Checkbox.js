/* eslint-disable no-use-before-define */

import React from "react";
import Avatar from "./Avatar";

import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function CheckboxesTags({ data }) {
  return (
    <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      options={data}
      disableCloseOnSelect
      getOptionLabel={(option) => `${option.category} ${option.title}`}
      renderOption={(option, { selected }) => (
        <React.Fragment>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {`${option.category} ${option.title}`}
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
  );
};
