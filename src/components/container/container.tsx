import * as React from "react";

const style: React.CSSProperties = {
  backgroundColor: "white",
  borderLeft: "5px solid #45ADE8",
  boxShadow: "0 3px 6px rgba(0,0,0,0.16)",
  display: "flex",
  flexDirection: "column",
  margin: "0 auto",
  maxWidth: "1600px",
  padding: "2rem",
};

interface Props {
  children: Array<React.ReactElement<any>>;
}

export const Container: React.SFC<Props> = (
  props,
) => (
  <div style={style}>
    {props.children}
  </div>
);
