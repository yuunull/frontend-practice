type MyAwaited<T> = T extends PromiseLike<infer U>
  ? U extends PromiseLike<unknown>
    ? MyAwaited<U>
    : U
  : never;
