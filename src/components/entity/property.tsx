import * as React from "react";

// tslint:disable:no-implicit-dependencies
import { JSONSchema6 } from "json-schema";

import { Details } from "../details/details";
import { Spread } from "../layout/spread";
import { Type } from "../type/type";

const style: React.CSSProperties = {
  borderColor: "#E0E0E0",
  borderStyle: "solid",
  borderWidth: "1px 0 0 0",
  padding: "1rem 0",
  verticalAlign: "top",
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
    <tr>
      <td style={style}>
        <code>{name}</code>
      </td>
      <td style={style}>
        <Details {...schema}/>
      </td>
    </tr>
  );
};
