import * as React from "react";

// tslint:disable:no-implicit-dependencies
import { JSONSchema6 } from "json-schema";

import { Container } from "../container/container";
import { Description } from "../entity/description";
import { Properties } from "../entity/properties";
import { Title } from "../entity/title";
import { Type } from "../type/type";

export const ObjectDetails: React.SFC<JSONSchema6> = (
  props,
) => {
  return (
    <Container>
      <Title {...props} />
      <Type {...props} />
      <Description {...props} />
      <h2>Properties</h2>
      <Properties {...props} />
    </Container>
  );
};
