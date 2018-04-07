import * as React from "react";

// tslint:disable:no-implicit-dependencies
import { JSONSchema6 } from "json-schema";

const style: React.CSSProperties = {
  color: "#3F51B5",
};

export const NumberType: React.SFC<JSONSchema6> = () => {
  return <code style={style}>number</code>;
};
