// eslint-disable-next-line @typescript-eslint/no-explicit-any
type MyAwaited<T> = T extends PromiseLike<infer U>
  ? U extends PromiseLike<any>
    ? MyAwaited<U>
    : U
  : never;
