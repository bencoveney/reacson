import * as React from "react";

// tslint:disable:no-implicit-dependencies
import { JSONSchema6 } from "json-schema";

import { Details } from "../details/details";
import { DefinitionContext } from "./context";

export const Ref: React.SFC<{
  refPath: string,
}> = (
  { refPath },
) => {
  const matches = /(\w+)$/.exec(refPath);
  const definitionName = matches ? matches[1] || "" : "";
  return (
    <DefinitionContext.Consumer>
      {(definitions) => <Resolved {...definitions[definitionName]}/>}
    </DefinitionContext.Consumer>
  );
};

const Resolved: React.SFC<boolean | JSONSchema6 | undefined> = (
  props,
) => {
  if (!props) {
    return null;
  }
  return <Details {...props} />;
};
