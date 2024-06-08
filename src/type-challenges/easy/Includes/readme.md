## [Includes](https://github.com/type-challenges/type-challenges/blob/main/questions/00898-easy-includes/README.ja.md)

infer が苦手っぽい・・・

`Includes<T extends readonly any[], U>`

- T は readonly any[]型を拡張する必要がある。これは、T が読み取り専用の配列であることを示しています。
- U は配列 T に含まれているかどうかをチェックする要素です。

`T extends [infer Head, ...infer Rest]`

- ここで T がパターン[infer Head, ...infer Rest]に一致するかどうかをチェックしています。
  これは、T が少なくとも 1 つの要素を持つ配列である場合、先頭の要素を Head、残りの要素を Rest として分割します。
- infer は TypeScript のキーワードで、型推論を行う際に使用されます。

`? Equal<Head, U> extends true`

- もし T が[Head, ...Rest]の形に一致する場合、Head と U が等しいかどうかを Equal 型を使ってチェックします。
- Equal 型は Head と U が等しい場合に true を返し、そうでない場合に false を返す型です。

`Includes<Rest, U>`
もし Equal<Head, U>が false であれば、残りの要素 Rest に対して再帰的に Includes 型を適用して、要素 U が含まれているかどうかをチェックします。
