/**
 * loop의 종류
 *
 * for loop = 코드 블록을 여러번 반복
 * for/in loop = 객체의 속성을 따라 반복
 * while loop = 지정된 조건이 true인 동안 코드 블록을 반복
 * do/while loop = 조건이 true인지 검사하기 전에 코드 블록을 한 번 실행, 그리고 나서 true인 동안 코드 블록을 반복
 */

// for loop
for (let i = 0; i < 10; i++) {
  console.log(i);
}

const user = {
  name: 'bmc',
  location: 'seoul',
  age: 30,
};

// for loop
for (let x in user) {
  console.log(x); // key 출력
  console.log(user[x]); // value 출력
}

// while loop
while (i < 10) {
  console.log(i);
  i++;
}

// do/while loop

let i = 0;

do {
  console.log(i);
  i++;
} while (i < 10);
