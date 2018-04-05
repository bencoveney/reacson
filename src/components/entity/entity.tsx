import * as React from "react";

// tslint:disable:no-implicit-dependencies
import * as JsonSchema from "json-schema";

interface Props {
  schema: JsonSchema.JSONSchema6;
  isRequired: boolean;
}

export const Entity: React.SFC<Props> = (
  {
    schema,
    isRequired,
  },
) => {
  const required: string[] = schema.required || [];

  const properties = schema.properties || {};

  const propertyElements = Object.keys(properties)
    .map((property, index) => {
      const value = properties[property];
      const childProps = {
        isRequired: required.indexOf(property) !== -1,
        schema: typeof value === "boolean" ? {} : value,
      };
      return [
        <dt key={(index * 2)}><code>{property}</code></dt>,
        <dd key={(index * 2) + 1}><Entity {...childProps} /></dd>,
      ];
    });

  return (
    <div>
      <div><h1>Title: {schema.title}</h1></div>
      <div><b>Required?: </b>{isRequired ? "Yes" : "No"}</div>
      <div><b>Description: </b>{schema.description}</div>
      <div><b>Code: </b><code>{schema.type}</code></div>
      <div><b>Format: </b>{schema.format}</div>
      <h2>Properties</h2>
      <dl>
        {propertyElements}
      </dl>
    </div>
  );
};
