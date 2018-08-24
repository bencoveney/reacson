import * as React from "react";

// tslint:disable:no-implicit-dependencies
import { JSONSchema6 } from "json-schema";

import { Details } from "../details/details";

const style: React.CSSProperties = {
  borderColor: "#E0E0E0",
  borderStyle: "solid",
  borderWidth: "1px 0 0 0",
  verticalAlign: "top",
};

const keyStyle: React.CSSProperties = {
  ...style,
  width: "150px",
};

const asteriskStyle: React.CSSProperties = {
  color: "#F44336",
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
  let header: React.ReactElement<any>;
  if (isRequired) {
    header = (
      <code title="Required">
        {name}
        <span style={asteriskStyle}>*</span>
      </code>
    );
  } else {
    header = <code>{name}</code>;
  }
  return (
    <tr>
      <td style={keyStyle}>
        {header}
      </td>
      <td style={style}>
        <Details {...schema}/>
      </td>
    </tr>
  );
};
