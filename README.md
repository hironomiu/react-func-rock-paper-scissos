# react-func-rock-paper-scissos

[![Deploy to Firebase Hosting on merge](https://github.com/hironomiu/react-func-rock-paper-scissos/actions/workflows/firebase-hosting-merge.yml/badge.svg)](https://github.com/hironomiu/react-func-rock-paper-scissos/actions?query=workflow%3Aaction)

じゃんけんゲームで React 関数コンポーネントの利用例

## Node

16.2.0 (nodenv で固定)

参考

```
$ npm list --depth=0
react-func-rock-paper-scissors@0.1.0
react-func-rock-paper-scissos
├── @testing-library/jest-dom@5.14.1
├── @testing-library/react@11.2.7
├── @testing-library/user-event@12.8.3
├── firebase-tools@9.14.0
├── react-dom@17.0.2
├── react-scripts@4.0.1
├── react@17.0.2
└── web-vitals@0.2.4
```

## Install & Start

```
$ npm install

$ npm start
```

## build

```
$ npm run build
```

## tests

`libs/index.text.js` -> `libs/index.js`

## Firebase deploy

build をし GitHub に push することで実装

## memo

Title コンポーネント先頭 image タグにて画像を BASE64 で出力 h4>title の前に記載(後ろは元の png 画像で出力)

Base64 に以下で encode し`src/const/index.html`に設定

```
let fs = require('fs');
fs.readFile('rock.png', 'base64', function(err, data) {
  console.log(data);
});
```
