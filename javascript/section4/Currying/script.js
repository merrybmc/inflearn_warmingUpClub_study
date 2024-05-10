/**
 * 커링 (Currying)
 *
 * 함수와 함께 사용하는 고급기술
 * 이 기술은 오직 자바스크립트에만 존재하는 것이 아닌 다른 언어에도 존재
 *
 * func(a,b,c) 처럼 단일 호출로 처리하는 함수를
 * func(a)(b)(c)와 같이 각각의 인수가 호출 가능한 프로세스로 호출된 후 병합될 수 있게 변환
 *
 * 커링은 함수를 호출하는 것이 아닌 변환하는 기술
 */

// 예시
// 일반 함수
const sum = (x, y) => x + y;

// 커링
const curriedSum = (x) => (y) => x + y;

console.log(sum(10, 20)); // 30
console.log(curriedSum(10)); // y => x + y;
console.log(curriedSum(10)(20)); // 30

const tenPlus = curriedSum(10);
console.log(tenPlus); // 10
console.log(tenPlus(100)); // 110

const makedFood = (ingredient1) => {
  return (ingredient2) => {
    return (ingredient3) => {
      return `${ingredient1} ${ingredient2} ${ingredient3}`;
    };
  };
};

const hamburger = makedFood('Bread')('Ham')('Tomato');
console.log(hamburger);
