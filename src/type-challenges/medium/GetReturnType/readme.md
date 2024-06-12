## [Get Return Type](https://github.com/type-challenges/type-challenges/blob/main/questions/00002-medium-return-type/README.ja.md)

`infer`がやっぱりまだ苦手。

ジェネリック型引数 `<T extends (...args: any[]) => any>`

- T はジェネリック型で、これは任意の関数型である必要があります。
- `(...args: any[]) => any`は任意の引数リストを取り、任意の型を返す関数を表しています。したがって、T は任意の関数型である必要があります。

条件型 `T extends (...args: any[]) => infer U ? U : never`
`T extends (...args: any[]) => infer U`は、T が関数型である場合、その戻り値の型を U として推論します。
infer キーワードは、型を推論するために使用されます。ここでは、関数の戻り値の型を推論するために使われています。
U は推論された戻り値の型です。
条件演算子 ? と : を使って、T が関数型であればその戻り値の型 U を返し、そうでなければ never 型を返します。
