import * as React from "react";

// tslint:disable:no-implicit-dependencies
import { JSONSchema6 } from "json-schema";

interface Props {
  children: Array<React.ReactElement<any>>;
}

const containerStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "nowrap",
  justifyContent: "space-between",
};

const elementStyle: React.CSSProperties = {
  flex: "0 0 auto",
};

export const Spread: React.SFC<Props> = (
  props,
) => {
  const elements = props.children.map(
    (child, index) => (
      <div key={index} style={elementStyle}>
        {child}
      </div>
    ),
  );

  return (
    <div style={containerStyle}>
      {elements}
    </div>
  );
};
