import * as React from "react";

// tslint:disable:no-implicit-dependencies
import { JSONSchema6 } from "json-schema";

import Example from "../../../examples/docson_example.json";
import { DefinitionContext } from "../definition/context";
import { Details } from "../details/details";
import { List } from "../examples/list";
import { Loaded } from "../examples/load";
import { Layout } from "../layout/layout";

interface State {
  example?: JSONSchema6;
}

export class App extends React.Component<{}, State> {
  constructor() {
    super({});
    this.state = {};
  }
  public render() {
    const schema = Example as JSONSchema6;
    const definitions = schema.definitions || {};
    return (
      <Layout>
        <List
          examples={Loaded}
          setExample={this.setExample}
        />
        <DefinitionContext.Provider value={definitions}>
          <Details {...this.state.example} />
        </DefinitionContext.Provider>
      </Layout>
    );
  }

  private setExample = (example: JSONSchema6) => this.setState(
    { example },
  )
}
