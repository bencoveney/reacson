import * as React from "react";

const pageStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "nowrap",
  height: "100%",
  margin: 0,
  padding: 0,
  position: "relative",
  width: "100%",
};

const sidebarStyle: React.CSSProperties = {
  boxShadow: "0 0 28px rgba(0,0,0,0.25), 0 0 10px rgba(0,0,0,0.22)",
  flex: "0 0 auto",
  height: "100%",
  overflow: "auto",
  zIndex: 1,
};

const contentStyle: React.CSSProperties = {
  backgroundColor: "#EEEEEE",
  flex: "1 1 auto",
  height: "100%",
  overflow: "auto",
  padding: "2rem",
  zIndex: 0,
};

interface Props {
  children: Array<React.ReactElement<any>>;
}

export const Layout: React.SFC<Props> = (
  props,
) => {
  return (
    <div style={pageStyle}>
      <div style={sidebarStyle}>
        {props.children[0]}
      </div>
      <div style={contentStyle}>
        {props.children[1]}
      </div>
    </div>
  );
};
