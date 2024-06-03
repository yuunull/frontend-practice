## [Awaited](https://github.com/type-challenges/type-challenges/blob/main/questions/00189-easy-awaited/README.ja.md)

`T extends PromiseLike<infer U>`
この部分は条件型（Conditional Type）`T`が`PromiseLike<U>`に適合する場合
そのプロミスが解決したときに得られる型`U`を推論（infer）する。

`U extends PromiseLike<any>`
推論された`U`が再び PromiseLike に適合するか再起的にチェック

`MyAwaited<U>`
PromiseLike に適合する場合ネストしているので、再起で最も内側の方を推論
これにより型が取得できる。
