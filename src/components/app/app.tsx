import * as React from "react";

// tslint:disable:no-implicit-dependencies
import * as JsonSchema from "json-schema";

import Example from "../../../examples/docson_example_noRefs.json";
import { Details } from "../details/details";

export class App extends React.Component<{}, {}> {
  public render() {
    return <Details {...Example} />;
  }
}
