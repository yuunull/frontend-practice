// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Last<T extends any[]> = T extends [...any[], infer U] ? U : never;
