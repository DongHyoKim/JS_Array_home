// 1번 숙제
let votes = ["kim", "lee", "lee", "park", "park", "lee", "kim"];
let resultkim = votes.filter(name => name === 'kim');
let resultlee = votes.filter(name => name === 'lee');
let resultpark = votes.filter(name => name === 'park');
// { kim 2, lee 3, park 2 }
console.log("{ kim " + resultkim.length + ", lee " + resultlee.length + ", park " + resultpark.length + "}");

// 2번 숙제
let numbers = [1, 2, 3, 4, 5];
// 메소드 하나만 사용하여  다음 결과를 만드세요
let result = numbers.map(function (x) {
    return x * 2
});
// { 2, 4, 6, 8, 10 }
console.log(result);