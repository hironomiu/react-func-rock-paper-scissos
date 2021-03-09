# react-func-rock-paper-scissos

じゃんけんゲームで React 関数コンポーネントの利用例

## Install & Start

```
$ npm install

$ npm start
```

## memo

image タグにて画像を BASE64 で出力してみたかったので h4>title の前に記載(後ろは元の png 画像)

画像 -> Base64 に encode

```
let fs = require('fs');
fs.readFile('rock.png', 'base64', function(err, data) {
  console.log(data);
});
```
