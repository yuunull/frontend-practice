// type Chainable<T extends object = {}> = {
//   option<K extends string, V extends any>(
//     key: K extends keyof T ? never : K,
//     value: V
//   ): Chainable<Omit<T, K> & Record<K, V>>;
//   get(): T;
// };
