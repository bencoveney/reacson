import * as React from "react";

// tslint:disable:no-implicit-dependencies
import { JSONSchema6 } from "json-schema";

const containerStyle: React.CSSProperties = {
  boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
  display: "flex",
  flexDirection: "column",
};

const topStyle: React.CSSProperties = {
  flex: "0 0 0",
};

const contentStyle: React.CSSProperties = {
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
