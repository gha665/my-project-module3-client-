import React, { createContext } from "react";
// import Autocomplete from "@material-ui/lab/Autocomplete";
// import throttle from "lodash/throttle";
import EventServices from "./../services/EventServices";

export const PartyContext = createContext();

class PartyProvider extends React.Component {
  // TODO : add the additional values to state: {} object below for:
  //        location: ""
  //        locationOptions

  state = {
    eventType: "",
    setEventType: (newEventType) =>
      this.setState({
        eventType: newEventType,
      }),

    selectedDate: new Date(),
    setSelectedDate: (newDate) =>
      this.setState({
        selectedDate: newDate,
      }),

    location: "",
    setLocation: (newLocation) =>
      this.setState({
        location: newLocation,
      }),

    cuisine: "",
    setSelectedCuisine: (cuisine) =>
      this.setState({
        cuisine: cuisine.target.value,
      }),

    addon: [],
    setSelectedAddOn: (newAddon) => {
      let results = this.state.addon.concat(newAddon);
      this.setState({
        addon: results,
      });
    },

    createParty: (eventType) => {
      EventServices.service
        .post("/api/events", {
          eventType: eventType,
          date: this.state.selectedDate,
          food: this.state.cuisine,
          addons: [], // TODO: add me in later from UI
        })
        .then((response) => {
          console.log(response.data);
        });
    },
  };

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
