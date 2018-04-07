import * as React from "react";

// tslint:disable:no-implicit-dependencies
import { JSONSchema6 } from "json-schema";

// Should match the type of JSONSchema6.definitions.
interface Definitions {
  [key: string]: boolean | JSONSchema6;
}

export const DefinitionContext = React.createContext<Definitions>({});
