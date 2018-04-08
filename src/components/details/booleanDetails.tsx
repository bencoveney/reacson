import * as React from "react";

// tslint:disable:no-implicit-dependencies
import { JSONSchema6 } from "json-schema";

import { Description } from "../entity/description";
import { Properties } from "../entity/properties";
import { SmallTitle } from "../entity/smallTitle";
import { Type } from "../type/type";

export const BooleanDetails: React.SFC<JSONSchema6> = (
  props,
) => {
  return (
    <div>
      <SmallTitle {...props} />
      <Type {...props} />
      <Description {...props} />
      <Properties {...props} />
    </div>
  );
};
