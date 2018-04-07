import * as React from "react";

// tslint:disable:no-implicit-dependencies
import { JSONSchema6 } from "json-schema";

import { Spread } from "../layout/spread";
import { Type } from "../type/type";

const titleStyle: React.CSSProperties = {
  backgroundColor: "#F44336",
  color: "white",
  padding: "1rem",
};

export const Title: React.SFC<JSONSchema6> = (
  props,
) => {
  // Some implementations will have an ID which
  // could be used if there is no title.
  const resolved = props.title || (props as { id?: string }).id;
  if (!resolved) {
    return null;
  }
  return (
    <div style={titleStyle}>
      <h1>{resolved}</h1>
    </div>
  );
};
