import * as React from "react";

// tslint:disable:no-implicit-dependencies
import * as JsonSchema from "json-schema";

import Example from "../../../examples/docson_example.json";
import { DefinitionContext } from "../definition/context";
import { Details } from "../details/details";

export class App extends React.Component<{}, {}> {
  public render() {
    const schema = Example as JsonSchema.JSONSchema6;
    const definitions = schema.definitions || {};
    return (
      <DefinitionContext.Provider value={definitions}>
        <Details {...Example} />
      </DefinitionContext.Provider>
    );
  }
}
