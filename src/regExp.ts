export const getMatchFinder = (
  regExp: RegExp,
) => (
  input?: string,
): string | undefined => {
  if (typeof input === "string") {
    const matches = regExp.exec(input);
    if (matches && matches.length > 0) {
      return matches[1];
    }
  }
  return undefined;
};
