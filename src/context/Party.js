import React, { Component, createContext } from "react";
import foodData from "../foodData.json";

export const PartyContext = createContext();

class PartyProvider extends React.Component {
  // TODO : add the additional values to state: {} object below for:
  //        location: ""
  //        locationOptions

  state = {
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

    locationOptions: [],
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
