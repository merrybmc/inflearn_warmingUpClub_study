class Person {
  constructor(name, email, birthday) {
    this.name = name;
    this.email = email;
    this.birthday = new Date(birthday);
  }

  introduce() {
    return `Hello my name is ${this.name}`;
  }

  // 정적 메서드
  // prototpye이 아닌 클래스 함수 자체에 메서드를 설정
  static multipleNumbers(x, y) {
    return x * y;
  }
}

const bmc = new Person('byeongMin', 'chobm1027@naver.com', '9-19-97');
const min = new Person('Cho', 'chobm1027@naver.com', '9-18-98');
