import * as React from "react";

// tslint:disable:no-implicit-dependencies
import { JSONSchema6 } from "json-schema";

import { Spread } from "../layout/spread";
import { Type } from "../type/type";

const style: React.CSSProperties = {
  backgroundColor: "#EEEEEE",
  padding: "0.5rem 1rem",
};

export const Subheading: React.SFC<{  }> = (
  props,
) => (
  <div style={style}>
    {props.children}
  </div>
);
