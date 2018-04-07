import * as React from "react";

// tslint:disable:no-implicit-dependencies
import { JSONSchema6 } from "json-schema";

const style: React.CSSProperties = {
  color: "orange",
};

export const ArrayType: React.SFC<JSONSchema6> = (
  props,
) => {
  return <code style={style}>array</code>;
};
