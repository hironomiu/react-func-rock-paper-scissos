# react-func-rock-paper-scissos

[![Deploy to Firebase Hosting on merge](https://github.com/hironomiu/react-func-rock-paper-scissos/actions/workflows/firebase-hosting-merge.yml/badge.svg)](https://github.com/hironomiu/react-func-rock-paper-scissos/actions?query=workflow%3Aaction)

じゃんけんゲームで React 関数コンポーネントの利用例

## Node

16.2.0 (nodenv で固定)

## Install & Start

```
$ npm install

$ npm start
```

## build

```
$ npm run build
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

## Firebase deploy

build をし GitHub に push することで実装
