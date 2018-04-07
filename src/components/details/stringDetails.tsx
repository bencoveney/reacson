import * as React from "react";

// tslint:disable:no-implicit-dependencies
import { JSONSchema6 } from "json-schema";

import { Description } from "../entity/description";
import { Properties } from "../entity/properties";
import { Title } from "../entity/title";
import { Type } from "../type/type";

export const StringDetails: React.SFC<JSONSchema6> = (
  props,
) => {
  return (
    <div>
      <Title {...props} />
      <Type {...props} />
      <Description {...props} />
      <Properties {...props} />
    </div>
  );
};
