import * as React from "react";

const style: React.CSSProperties = {
  alignItems: "baseline",
  display: "flex",
  flexFlow: "flex-start",
};

interface Props {
  children: Array<React.ReactElement<any>>;
}

export const Horizontal: React.SFC<Props> = (
  props,
) => (
  <div style={style}>
    {props.children}
  </div>
);
