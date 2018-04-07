import * as React from "react";

// tslint:disable:no-implicit-dependencies
import { JSONSchema6 } from "json-schema";

import { Ref } from "../definition/ref";
import { ArrayDetails } from "./arrayDetails";
import { BooleanDetails } from "./booleanDetails";
import { IntegerDetails } from "./integerDetails";
import { NullDetails } from "./nullDetails";
import { NumberDetails } from "./numberDetails";
import { ObjectDetails } from "./objectDetails";
import { StringDetails } from "./stringDetails";

export const Details: React.SFC<JSONSchema6> = (
  props,
) => {
  if (props.$ref) {
    return <Ref refPath={props.$ref} />;
  }
  switch (props.type) {
    case "array":
      return <ArrayDetails {...props}/>;
    case "boolean":
      return <BooleanDetails {...props}/>;
    case "integer":
      return <IntegerDetails {...props}/>;
    case "null":
      return <NullDetails {...props}/>;
    case "number":
      return <NumberDetails {...props}/>;
    case "object":
    default:
      return <ObjectDetails {...props}/>;
    case "string":
      return <StringDetails {...props}/>;
  }
};
