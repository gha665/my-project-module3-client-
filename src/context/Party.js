import React, { Component, createContext } from "react";
import foodData from "../foodData.json";
import Autocomplete from "@material-ui/lab/Autocomplete";
import throttle from "lodash/throttle";

export const PartyContext = createContext();

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

class PartyProvider extends React.Component {
  // TODO : add the additional values to state: {} object below for:
  //        location: ""
  //        locationOptions

  state = {
    active: true,
    selectedDate: new Date(),
    setSelectedDate: (newDate) =>
      this.setState({
        selectedDate: newDate,
      }),

    location: "",
    setLocation: (newLocation) =>
      this.setState({
        location: newLocation.target.value,
      }),

    locationOptions: [],
    setLocationOptions: (options) =>
      this.setState({
        locationOptions: options,
      }),
    // autocompleteService: { current: null },
    // loaded: React.createRef(false),
  };

  // fetch() {
  //   React.memo(
  //     () =>
  //       throttle((request, callback) => {
  //         this.state.autocompleteService.current.getPlacePredictions(
  //           request,
  //           callback
  //         );
  //       }, 200),
  //     []
  //   );
  // }

  // componentDidMount = () => {
  //   if (typeof window !== "undefined" && !this.state.loaded.current) {
  //     if (!document.querySelector("#google-maps")) {
  //       loadScript(
  //         "https://maps.googleapis.com/maps/api/js?key=AIzaSyC72g71YFgHomZSSfaavmBBKZV8optwrM0&libraries=places",
  //         document.querySelector("head"),
  //         "google-maps"
  //       );
  //     }

  //     this.state.loaded.current = true;
  //   }

  //   if (!this.state.autocompleteService.current && window.google) {
  //     this.state.autocompleteService.current = new window.google.maps.places.AutocompleteService();
  //   }
  //   if (!this.state.autocompleteService.current) {
  //     return undefined;
  //   }

  //   if (this.state.location === "") {
  //     this.state.setLocationOptions([]);
  //     return undefined;
  //   }

  //   console.log("LOOOOOOOOO", this.state.location);

  //   fetch({ input: this.state.location }, (results) => {
  //     console.log("RESULTS".results);
  //     if (this.state.active) {
  //       this.state.setLocationOptions(results);
  //     }
  //   });

  //   return () => {
  //     this.state.active = false;
  //   };
  // };

  render() {
    return (
      <PartyContext.Provider
        value={{
          state: this.state,
        }}
      >
        {this.props.children}
      </PartyContext.Provider>
    );
  }
}

export default PartyProvider;
