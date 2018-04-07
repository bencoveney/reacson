import * as React from "react";

// tslint:disable:no-implicit-dependencies
import { JSONSchema6 } from "json-schema";

const style: React.CSSProperties = {
  color: "purple",
};

export const BooleanType: React.SFC<JSONSchema6> = (
  props,
) => {
  return <code style={style}>boolean</code>;
};
