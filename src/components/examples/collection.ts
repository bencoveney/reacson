// tslint:disable:no-implicit-dependencies
import { JSONSchema6 } from "json-schema";

export interface Collection {
  [path: string]: JSONSchema6;
}
