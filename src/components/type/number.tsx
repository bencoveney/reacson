import * as React from "react";

// tslint:disable:no-implicit-dependencies
import { JSONSchema6 } from "json-schema";

const style: React.CSSProperties = {
  color: "blue",
};

export const NumberType: React.SFC<JSONSchema6> = (
  props,
) => {
  return <code style={style}>number</code>;
};
