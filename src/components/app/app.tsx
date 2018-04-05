import * as React from "react";

// tslint:disable:no-implicit-dependencies
import * as JsonSchema from "json-schema";

import Example from "../../../examples/basic.json";
import { Entity } from "../entity/entity";

export class App extends React.Component<{}, {}> {
  public render() {
    return <Entity {...Example} />;
  }
}
