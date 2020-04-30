import React from "react";
import { Link, Redirect } from "react-router-dom";

export default function Birthday(props) {
  const { loggedIn, setStorage, user } = props;

  return (
    <div>
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
