import * as React from "react";

// tslint:disable:no-implicit-dependencies
import { JSONSchema6 } from "json-schema";

import { Property } from "./property";

const style: React.CSSProperties = {
  borderCollapse: "collapse",
  margin: "1rem 0",
  width: "100%",
};

export const Properties: React.SFC<JSONSchema6> = (
  props,
) => {
  // Default the relevant data.
  const required: string[] = props.required || [];
  const properties = props.properties || {};

  // Check we actually have some properties.
  const names = Object.keys(properties);
  if (names.length === 0) {
    return null;
  }

  const elements = names.map(
    (name, index) => {
      const isRequired = required.indexOf(name) !== -1;
      const childProps = properties[name];
      return (
        <Property
          isRequired={isRequired}
          name={name}
          schema={childProps as JSONSchema6}
          key={index}
        />
      );
    },
  );

  return (
    <table style={style}>
      <tbody>
        {elements}
      </tbody>
    </table>
  );
};
