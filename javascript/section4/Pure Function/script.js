// 순수 함수 (Pure Function)

// 함수형 프로그래밍 패러다임의 한 부분이며 순수 함수는 두 가지 규칙을 가지고 있다.

// 1. 같은 입력값이 주어졌을 때 언제나 같은 결과값을 리턴한다.
// 2. 사이드 이펙트를 만들지 않는다.

// 순수 함수를 사용하는 이유는?

// 1. 클린 코드를 위해
// 2. 테스트를 쉽게하기 위해
// 3. 디버그를 쉽게하기 위해
// 4. 독립적인 코드를 위해

// Example
// 1. 같은 Input을 나오면 항상 같은 Output이 나온다.
const add = (x, y) => x + y;
console.log(add(10, 20));

const fullName = (first, last) => `${first} ${last}`;
console.log(fullName('ByeongMin', 'Cho'));

// 2. No Side Effect
// 함수 외부에서 스코프에 접근하는 것은 순수 함수를 순수하지 않은 함수로 만든다.
// 함수 외부에 있는 값을 변경시켜선 안된다.
const z = 1;
const sum = (x, y) => x + y + z;
console.log(sum(10, 20));

// 해결 방법
const z2 = 0;
const sum2 = (x, y, z) => x + y + z;
console.log(sum(10, 20, z));
