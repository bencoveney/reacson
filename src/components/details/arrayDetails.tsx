import * as React from "react";

// tslint:disable:no-implicit-dependencies
import { JSONSchema6 } from "json-schema";

import { Container } from "../container/container";
import { Description } from "../entity/description";
import { Properties } from "../entity/properties";
import { Title } from "../entity/title";
import { Spread } from "../layout/spread";
import { Type } from "../type/type";
import { Details } from "./details";

export const ArrayDetails: React.SFC<JSONSchema6> = (
  props,
) => {
  const items = (props.items || {}) as JSONSchema6;

  return (
    <div>
      <Title {...props}/>
      <Description {...props}/>
      <p>Array Of:</p>
      <Details {...items}/>
    </div>
  );
};
