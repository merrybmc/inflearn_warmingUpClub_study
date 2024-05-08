// IIFE
// 즉시 실행 함수 (Immediately Invoked Function Expression)은 정의되자마자 즉시 실행되는 자바스크립트 함수를 말한다.

// 기본 형태

(function () {
  var aName = 'Barry';
})();

// IIFE 내부에서 정의된 변수는 외부 범위에서 접근 불가
console.log(aName);

// 이름 없는 함수를 위해서도 사용 가능
var result = (function () {
  var aName = 'Barry';
  return aName;
})();

console.log(result); // Barry

const score = (a, b) => {
  let count = 0;
  return {
    current: () => {
      return count;
    },
    increment: () => {
      count + 1;
    },
    reset: () => (count = 0),
  };
};

console.log(typeof score);
console.log(score);
