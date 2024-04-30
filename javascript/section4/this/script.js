/**
 * this
 *
 * 메서드에서 this 사용 -> 참조 객체를 가리킴
 * 함수에서 this 사용 -> window 객체를 가리킴
 * 생성자 함수에서 this 사용 -> 빈 객체를 가리킴
 */

// Method -> Object

const audio = {
  title: 'a',
  play() {
    console.log('play this', this); // audio 객체를 가리킴
  },
};

audio.play();

// Function -> Window

function playAudio() {
  console.log(this); // window 객체를 가리킴
}

playAudio();

// Constructor Function -> Window Object

function Audio(title) {
  this.title = title;
  console.log(this); // title 출력
}

const cAudio = new Audio('a');

/**
 * call, apply, bind Method
 *
 * this가 가리키는 객체를 다른 것으로 바꾸어주는 Method
 * 호출되는 함수의 this 안에 window 객체가 아닌 전달받은 것을 받게 된다.
 *
 */

// call
const fullName = function (city, country) {
  console.log(this.firstName + ' ' + this.lastName, city, country);
};

const person = {
  firstName: 'Byeong Min',
  lastName: 'Cho',
};

fullName.call(person);

// Apply
fullName.apply(person, ['Seoul', 'Kangseo']);

// bind
function func(language) {
  if (language === 'kor') {
    console.log(`language: ${this.korGreeting}`);
  } else {
    console.log(`language: ${this.engGreeting}`);
  }
}

const greeting = {
  korGreeting: '안녕',
  engGreeting: 'Hello',
};

// call과 Apply와의 차이점으로 함수를 실행시켜주지 않음
func.bind(greeting);

// 함수를 따로 실행시켜주어야 함
func();
