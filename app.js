// alert('Hello World');

// 変数に代入
// let hello = "Hello world";
// alert(hello);

// 演算
// alert(4+3);

// 文字の結合
// alert("Hello" + "World");

// 変数に代入しての結合
// let str1 = "Hello";
// let str2 = "World!!";
// alert(str1+str2);

// 条件分岐　if文
// let orange = 100;
// let apple = 200;
// if(orange < apple){
  // alert("みかんの値段がりんごよりも安い");
// } else if(orange == apple){
  // alert("みかんとりんごが同じ値段");
// } else{
  // alert("みかんの値段がりんごよりも高い");
// }

// 繰り返し構文　while文
// let
// let max = 100;
// let num = 1;
// let count = 0;

// while(num < max){
  // num = num * 2;
  // count = count + 1;
// }

// alert("2をかけ続けて" + max + "を超えるのに必要だった回数は" + count + "回です");

// do~while文
// do{
  // 最低1回は行われる処理
// }while(条件式);

// 消費税の計算
// let tax = 1.08;
// 入力された数値を保存
// promptに集力された数値を変数に保存する
// let price = prompt("商品の総額を数値で集力してくだい");
// 入力された数値に消費税を掛ける
// let result = Math.round(price * tax);
// 計算結果を表示
// alert("お買い上げの合計は、消費税込みで" + result + "円です");

// for文
// for ( 初期値; 条件式; 増減値 ){
  // 繰り返し処理
// }
// let i;
// let num = 0;

// for(i = 1; i < 11; i++){
  // num = num + i;
// }

// alert('1から10まで足し算した結果は' + num + 'です');

// varによる再宣言
// var nickname = "taro"
// console.log(nickname)
// var nickname = "ichiro"
// console.log(nickname)

// letによる再宣言
// let nickname = "taro"
// console.log(nickname)
// let nickname = "ichiro"
// console.log(nickname)

// constによる再代入
// const nickname = "taro"
// console.log(nickname)
// nickname = "jiro"
// console.log(nickname)

// グローバルスコープ（有効範囲）
// var str = "webcamp" //グローバルスコープ

// function foo() {
  // console.log(str)
  // var y = "hello" //関数スコープ
// }

// foo()
// console.log(y)

// 配列からデータを取得する
// let action = ["スターウォーズ", "バック・トゥ・ザ・フューチャー", "エイリアン2"];
// console.log(action[1])

配列からデータを取得する
let action = ["スターウォーズ", "バック・トゥ・ザ・フューチャー", "エイリアン2"];
console.log(action[1])