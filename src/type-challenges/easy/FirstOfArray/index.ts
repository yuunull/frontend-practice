type First<T extends any[]> = T extends [infer first, ...any] ? first : never;
