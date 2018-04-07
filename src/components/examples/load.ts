import { Collection } from "./collection";

const examples = require.context(
  "../../../examples",
  true,
  /^(.*\.(json$))[^.]*$/im,
);

export const Loaded: Collection = examples.keys().reduce(
  (collection: Collection, path) => {
    const matches = /(\w+)\.\w+$/.exec(path);
    const name = matches ? matches[1] : path;
    collection[name] = examples(path);
    return collection;
  },
  {},
);
