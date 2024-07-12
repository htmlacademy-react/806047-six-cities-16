export function invert<T extends Record<string, string>, K extends keyof T>(
  target: T,
  modifier = (agr: string) => agr
) {
  return Object.entries(target).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [value]: modifier(key),
    }),
    {} as {
      [key in T[K] & string]: Lowercase<K & string>;
    }
  );
}
