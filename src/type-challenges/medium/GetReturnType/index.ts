// eslint-disable-next-line @typescript-eslint/no-explicit-any
type MyReturnType<T extends (...args: any[]) => any> = T extends (
  ...args: never[]
) => infer U
  ? U
  : never;
