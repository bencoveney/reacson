import * as React from "react";

// tslint:disable:no-implicit-dependencies
import { JSONSchema6 } from "json-schema";

export const Description: React.SFC<JSONSchema6> = (
  props,
) => {
  if (!props.description) {
    return null;
  }
  return (
    <p>
      {props.description}
    </p>
  );
};
