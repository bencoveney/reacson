import * as React from "react";

// tslint:disable:no-implicit-dependencies
import { JSONSchema6 } from "json-schema";

import { Container } from "../container/container";
import { Description } from "../entity/description";
import { Title } from "../entity/title";
import { Horizontal } from "../layout/horizontal";
import { Type } from "../type/type";
import { Details } from "./details";

const style: React.CSSProperties = {
  margin: 0,
};

export const ArrayDetails: React.SFC<JSONSchema6> = (
  props,
) => {
  const items = (props.items || {}) as JSONSchema6;

  return (
    <Container>
      <Horizontal>
        <Title {...props}/>
        <Type {...props}/>
      </Horizontal>
      <Description {...props}/>
      <div style={style}>
        <Details {...items}/>
      </div>
    </Container>
  );
};
