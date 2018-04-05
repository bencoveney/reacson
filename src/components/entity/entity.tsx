import * as React from "react";

// tslint:disable:no-implicit-dependencies
import { JSONSchema6 } from "json-schema";

const containerStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  margin: "1rem",
};

const topStyle: React.CSSProperties = {
  flex: "0 0 0",
};

const contentStyle: React.CSSProperties = {
  border: "1px solid black",
  flex: "1 1 auto",
  padding: "1rem",
};

export const Entity: React.SFC<JSONSchema6> = (
  props,
) => {
  return (
    <div style={containerStyle}>
      <div style={topStyle}>
      <Title {...props} />
      </div>
      <div style={contentStyle}>
        <Description {...props} />
        <Properties {...props} />
      </div>
    </div>
  );
};

const titleStyle: React.CSSProperties = {
  backgroundColor: "black",
  color: "white",
  padding: "1rem",
};

export const Title: React.SFC<JSONSchema6> = (
  props,
) => {
  if (!props.title) {
    return null;
  }
  return (
    <div style={titleStyle}>
      <h1>
        {props.title}
        <Type {...props}/>
      </h1>
    </div>
  );
};

export const Description: React.SFC<JSONSchema6> = (
  props,
) => {
  if (!props.description) {
    return null;
  }
  return (
    <p>
      {props.description}
    </p>
  );
};

const typeStyle: React.CSSProperties = {
  color: "grey",
  fontFamily: "monospace",
};

export const Type: React.SFC<JSONSchema6> = (
  props,
) => {
  if (!props.type) {
    return null;
  }
  return (
    <code style={typeStyle}>
      [{props.type}]
    </code>
  );
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
    <div>
      {elements}
    </div>
  );
};

export const Property: React.SFC<{
  isRequired: boolean,
  name: string,
  schema: JSONSchema6,
}> = ({
  isRequired,
  name,
  schema,
}) => {
  return (
    <div>
      <b>
        <code>{name}</code>
        <Type {...schema}/>
      </b>
      <Entity {...schema} />
    </div>
  );
};
