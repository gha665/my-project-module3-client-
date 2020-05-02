import React from "react";
import { Link, Redirect } from "react-router-dom"; 
import { styles } from "@material-ui/pickers/views/Calendar/Calendar"; 
import "../../App.scss";

export default function Conference(props) {
  const { loggedIn, setStorage, user } = props;

  return (
    <div className="conference" >
      <button>Date</button>
      <button>Location</button>
      <button>Add ons</button>
      <button>Food</button>
      <Link
        to={{
          pathname: "/privatepage",
          state: {
            userFromLink: user,
          },
        }}
      >
        CHECK OUT
      </Link>
    </div>
  );
}
