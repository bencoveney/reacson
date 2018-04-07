import * as React from "react";

// tslint:disable:no-implicit-dependencies
import { JSONSchema6 } from "json-schema";

import { Details } from "../details/details";
import { Spread } from "../layout/spread";
import { Type } from "../type/type";

const style: React.CSSProperties = {
  marginBottom: "1rem",
};

export const Property: React.SFC<{
  isRequired: boolean,
  name: string,
  schema: JSONSchema6,
}> = ({
  isRequired,
  name,
  schema,
}) => {
  return (
    <div style={style}>
      <code>{name}</code>
      <Details {...schema}/>
    </div>
  );
};
