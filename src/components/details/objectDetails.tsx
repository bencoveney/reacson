import * as React from "react";

// tslint:disable:no-implicit-dependencies
import { JSONSchema6 } from "json-schema";

import { Container } from "../container/container";
import { Description } from "../entity/description";
import { Properties } from "../entity/properties";
import { Title } from "../entity/title";
import { Horizontal } from "../layout/horizontal";
import { Type } from "../type/type";

export const ObjectDetails: React.SFC<JSONSchema6> = (
  props,
) => {
  return (
    <Container>
      <Horizontal>
        <Title {...props}/>
        <Type {...props}/>
      </Horizontal>
      <Description {...props} />
      <Properties {...props} />
    </Container>
  );
};
