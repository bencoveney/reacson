import * as React from "react";

// tslint:disable:no-implicit-dependencies
import { JSONSchema6 } from "json-schema";

import { ArrayType } from "./arrayType";
import { BooleanType } from "./booleanType";
import { Integer } from "./integer";
import { Null } from "./null";
import { NumberType } from "./number";
import { ObjectType } from "./object";
import { StringType } from "./string";

export const Type: React.SFC<JSONSchema6> = (
  props,
) => {
  switch (props.type) {
    case "array":
      return <ArrayType {...props}/>;
    case "boolean":
      return <BooleanType {...props}/>;
    case "integer":
      return <Integer {...props}/>;
    case "null":
      return <Null {...props}/>;
    case "number":
      return <NumberType {...props}/>;
    case "object":
      return <ObjectType {...props}/>;
    case "string":
      return <StringType {...props}/>;
    default:
      return null;
  }
};
