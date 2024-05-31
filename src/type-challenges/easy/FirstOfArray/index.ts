// eslint-disable-next-line @typescript-eslint/no-explicit-any
type First<T extends any[]> = T extends [infer first, ...any] ? first : never;
