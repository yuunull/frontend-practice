## [First of Array](https://github.com/type-challenges/type-challenges/blob/main/questions/00014-easy-first/README.ja.md)

`infer`について学習した。  
infer は、TypeScript の条件型（conditional types）内で使われるキーワードで、  
特定の型を推論するために使用されます。infer は主に型の一部を抽出して、それに基づいて新しい型を作成するために役立ちます。

```
type Unwrap<T> = T extends (infer U)[] ? U : T;

type A = Unwrap<number[]>; // number
type B = Unwrap<string[]>; // string
type C = Unwrap<boolean>;  // boolean

```
