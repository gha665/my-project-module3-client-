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
