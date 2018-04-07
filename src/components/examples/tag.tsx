import * as React from "react";

interface Props {
  content: string;
  tooltip: string;
  backgroundColor: string;
}

const style: (
  backgroundColor: string,
) => React.CSSProperties = (
  backgroundColor: string,
) => ({
  backgroundColor,
  borderRadius: "4px",
  bottom: "0.2rem",
  color: "white",
  display: "inline-block",
  fontSize: "0.6rem",
  fontWeight: "bold",
  margin: "0 0 0 0.4rem",
  padding: "0.2rem 0.4rem",
  position: "relative",
});

export const Tag: React.SFC<Props> = (
  props,
) => (
  <div title={props.tooltip} style={style(props.backgroundColor)}>
    {props.content}
  </div>
);
