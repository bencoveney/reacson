import * as React from "react";

// tslint:disable:no-implicit-dependencies
import { JSONSchema6 } from "json-schema";

const style: React.CSSProperties = {
  color: "#3F51B5",
};

export const Type: React.SFC<JSONSchema6> = (
  props,
) => {
  return <code style={style}>{props.type || "unknown"}</code>;
};
