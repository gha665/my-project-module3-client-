import React, { Component } from "react";

export default class PrivatePage extends Component {
  render() {
    const { user } = this.props;
    const  userFromLink = this.props.location.state?.userFromLink;
    console.log("PrivatePage -> render -> userFromLink", this.props)
    return (
      <div>
        <h1>Hi, {user.firstName}! </h1>
        <h1>Hi userFromLink, {userFromLink?.firstName}! </h1>
      </div>
    );
  }
}
