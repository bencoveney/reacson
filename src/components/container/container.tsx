import * as React from "react";

// tslint:disable:no-implicit-dependencies
import { JSONSchema6 } from "json-schema";

const containerStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  margin: "1em",
};

const topStyle: React.CSSProperties = {
  flex: "0 0 0",
};

const contentStyle: React.CSSProperties = {
  border: "1px solid black",
  flex: "1 1 auto",
  padding: "1rem",
};

interface Props {
  children: Array<React.ReactElement<any>>;
}

export const Container: React.SFC<Props> = (
  props,
) => {
  const [first, ...rest] = props.children;
  return (
    <div style={containerStyle}>
      <div style={topStyle}>{first}</div>
      <div style={contentStyle}>{rest}</div>
    </div>
  );
};
