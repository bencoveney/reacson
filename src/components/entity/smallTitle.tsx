import * as React from "react";

// tslint:disable:no-implicit-dependencies
import { JSONSchema6 } from "json-schema";

const style: React.CSSProperties = {
  color: "#616161",
  fontSize: "1.2rem",
  paddingBottom: "0.5rem",
};

export const SmallTitle: React.SFC<JSONSchema6> = (
  props,
) => {
  // Some implementations will have an ID which
  // could be used if there is no title.
  const resolved = props.title || (props as { id?: string }).id;
  if (!resolved) {
    return null;
  }
  return (
    <div style={style}>
      <h1>{resolved}</h1>
    </div>
  );
};
