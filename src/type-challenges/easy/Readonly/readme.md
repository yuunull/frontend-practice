## [Readonly](https://github.com/type-challenges/type-challenges/blob/main/questions/00007-easy-readonly/README.md)

ReadOnly の効果は再起的ではないと知った。  
なのでネストされたオブジェクトのプロパティに対しても読み取り専用にするために最初は以下の型定義をした。

```ts
type MyReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object ? MyReadonly<T[P]> : T[P];
};
```

しかしこれは間違い。
テストケースみると結果は Readonly<T>と同じになることなので勘違いを起こしていた。
