/**
 * backtick(`) 문자를 사용하여 문자열을 표현한 것을 템플릿 리터럴이라고 부른다.
 *
 * 장점
 * 1. 문자열의 줄바꿈을 쉽게 할 수 있다.
 * 2. 문자열 내부에 표현식을 포함할 수 있다.
 */

// ES5
console.log('string line1\n' + 'hello line2');
// string line 1
// hello line 2

// ES6 template literals
console.log(`string line 1
hello line2`);
// string line 1
// hello line 2

let a = 10;
let b = 20;

// ES5
console.log('string' + (a + b) + 'hello' + (a - b));

// ES6
console.log(`string ${a + b} hello ${a + b}`);
