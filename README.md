# react-func-rock-paper-scissos
じゃんけんゲームでReact関数コンポーネントの利用例

## Start
```
$ npm start
```

## memo
imageタグにて画像をBASE64で出力してみたかったのでh4>titleの前に記載(後ろは元のpng画像)

画像 -> Base64にencode
```
let fs = require('fs');
fs.readFile('rock.png', 'base64', function(err, data) {
  console.log(data);
});
```