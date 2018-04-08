import * as React from "react";

const style: React.CSSProperties = {
  backgroundColor: "#E0E0E0",
  padding: "0.5rem 1rem",
};

export const Subheading: React.SFC<{}> = (
  props,
) => (
  <div style={style}>
    {props.children}
  </div>
);
