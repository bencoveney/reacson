import * as React from "react";

// tslint:disable:no-implicit-dependencies
import * as JsonSchema from "json-schema";

import Example from "../../../examples/card.json";
import { Entity } from "../entity/entity";

const entityProps = {
  isRequired: true,
  schema: Example as JsonSchema.JSONSchema6,
};

export class App extends React.Component<{}, {}> {
  public render() {
    return <Entity {...entityProps} />;
  }
}
