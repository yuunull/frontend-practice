## [Omit](https://github.com/type-challenges/type-challenges/blob/main/questions/00003-medium-omit/README.ja.md)

`[P in keyof T as P extends K ? never : P]`
keyof T を使って型 T のすべてのプロパティキーを取得し、それを P に代入してイテレートします。
P extends K ? never : P によって、P が K に含まれている場合は never（そのプロパティを除外）、含まれていない場合はそのまま P とします。
