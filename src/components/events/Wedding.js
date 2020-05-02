import React from "react";
import { Link, Redirect } from "react-router-dom";

export default function Wedding(props) {
  const { loggedIn, setStorage, user } = props;

  return (
    <div className="wedding">
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
