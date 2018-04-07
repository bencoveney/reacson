import * as React from "react";

// tslint:disable:no-implicit-dependencies
import { JSONSchema6 } from "json-schema";
import { getMatchFinder } from "../../regexp";
import { Collection } from "./collection";
import { Tag } from "./tag";

interface Props {
  examples: Collection;
  setExample: (schema: JSONSchema6) => void;
}

const itemStyle: React.CSSProperties = {
  borderColor: "#E0E0E0",
  borderStyle: "solid",
  borderWidth: "1px 0 0 0",
};

const linkStyle: React.CSSProperties = {
  display: "block",
  padding: "1rem",
};

const versionFinder = getMatchFinder(/json-schema\.org\/draft-(\d+)/);

const versionColors: {
  [version: number]: string,
} = {
  4: "#0277BD",
  6: "#C62828",
};
const defaultColor = "#616161";

const getTag = (schema?: string) => {
  const version = versionFinder(schema);
  if (!version) {
    return (
      <Tag
        backgroundColor={defaultColor}
        content="V?"
        tooltip="Unknown Schema Version"
      />
    );
  }
  const versionNumber = parseInt(version, 10);
  const backgroundColor = versionColors[versionNumber] || defaultColor;
  return (
    <Tag
      backgroundColor={backgroundColor}
      content={`V${versionNumber}`}
      tooltip={`Schema Version ${versionNumber}`}
    />
  );
};

export const List: React.SFC<Props> = (
  props,
) => {
  const items = Object.keys(props.examples).map(
    (path, index) => {
      const example = props.examples[path];
      const tag = getTag(example.$schema);
      const click = () => props.setExample(example);
      return (
        <li style={itemStyle} key={index}>
          <a style={linkStyle} onClick={click}>
            {path}
            {tag}
          </a>
        </li>
      );
    },
  );

  return <ul>{items}</ul>;
};
