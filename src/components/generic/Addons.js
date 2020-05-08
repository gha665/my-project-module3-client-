import React from "react";
import addons from "../../data/addonSeeds";
import Checkbox from "../Checkbox";

export default function Addon() {
  return (
    <div>
      <Checkbox data={addons} />
    </div>
  );
}

// {
//     category: "Entertainment",
//     title: "DJ",
//     name: "Dionte",
//     description:
//       "Dionte is a multifaceted performer, accomplished open format DJ and producer, and a professional dancer. His genuine love for music and enthusiasm makes him a fun and pleasant performer to work with, ensuring an enjoyable atmosphere for any event.",
//     price: 500,
//     thumbnail_url: "https://ukiproductions.com/images/djs/demo-cover.jpg",
//   }
