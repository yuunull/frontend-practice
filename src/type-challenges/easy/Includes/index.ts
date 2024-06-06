// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Includes<T extends readonly any[], U> = T extends [
  infer Head,
  ...infer Rest
]
  ? Equal<Head, U> extends true
    ? true
    : Includes<Rest, U>
  : false;
