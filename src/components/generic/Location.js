import React from "react";
import { PartyProvider, PartyContext } from "./../../context/Party";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import parse from "autosuggest-highlight/parse";
import throttle from "lodash/throttle";
import { spacing } from "@material-ui/system";

function loadScript(src, position, id) {
  if (!position) {
    return;
  }

  const script = document.createElement("script");
  script.setAttribute("async", "");
  script.setAttribute("id", id);
  script.src = src;
  position.appendChild(script);
}

const autocompleteService = { current: null };

const useStyles = makeStyles((theme) => ({
  icon: {
    color: theme.palette.text.secondary,
    marginRight: theme.spacing(2),
  },
}));

export default function Location() {
  const classes = useStyles();
  const loaded = React.useRef(false);
  const [location, setLocation] = React.useState("");
  const [locationOptions, setLocationOptions] = React.useState([]);

  if (typeof window !== "undefined" && !loaded.current) {
    if (!document.querySelector("#google-maps")) {
      loadScript(
        "https://maps.googleapis.com/maps/api/js?key=AIzaSyC72g71YFgHomZSSfaavmBBKZV8optwrM0&libraries=places",
        document.querySelector("head"),
        "google-maps"
      );
    }

    loaded.current = true;
  }

  const handleChange = (event) => {
    setLocation(event.target.value);
  };

  const fetch = React.useMemo(
    () =>
      throttle((request, callback) => {
        autocompleteService.current.getPlacePredictions(request, callback);
      }, 200),
    []
  );

  React.useEffect(() => {
    let active = true;

    if (!autocompleteService.current && window.google) {
      autocompleteService.current = new window.google.maps.places.AutocompleteService();
    }
    if (!autocompleteService.current) {
      return undefined;
    }

    if (location === "") {
      setLocationOptions([]);
      return undefined;
    }

    fetch({ input: location }, (results) => {
      if (active) {
        console.log("RESULTS", results);
        setLocationOptions(results);
      }
    });

    return () => {
      active = false;
    };
  }, [location, fetch]);

  return (
    <PartyContext.Consumer>
      {(context) => (
        <Grid container justify="space-around" mb={2}>
          <Autocomplete
            id="google-map-demo"
            style={{ width: 300 }}
            getOptionLabel={(option) =>
              typeof option === "string" ? option : option.description
            }
            filterOptions={(x) => x}
            options={locationOptions}
            autoComplete
            includeInputInList
            renderInput={(params) => (
              <TextField
                {...params}
                label={
                  context.state.location
                    ? context.state.location
                    : "Where is your event?"
                }
                fullWidth
                value={context.state.location}
                onChange={context.state.setLocation}
              />
            )}
            renderOption={(option) => {
              const matches =
                option.structured_formatting.main_text_matched_substrings;
              const parts = parse(
                option.structured_formatting.main_text,
                matches.map((match) => [
                  match.offset,
                  match.offset + match.length,
                ])
              );

              return (
                <Grid container alignItems="center">
                  <Grid item>
                    <LocationOnIcon className={classes.icon} />
                  </Grid>
                  <Grid item xs>
                    {parts.map((part, index) => (
                      <span
                        key={index}
                        style={{ fontWeight: part.highlight ? 700 : 400 }}
                      >
                        {part.text}
                      </span>
                    ))}

                    <Typography variant="body2" color="textSecondary">
                      {option.structured_formatting.secondary_text}
                    </Typography>
                  </Grid>
                </Grid>
              );
            }}
          />
        </Grid>
      )}
    </PartyContext.Consumer>
  );
}
