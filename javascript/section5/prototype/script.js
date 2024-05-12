let user = {
  name: 'bmc',
  age: 30,
};

console.log(user.name);
console.log(user.hasOwnProperty('email'));

// 모든 객체는 global Object prototype을 가진다.

// 프로토타입은 자바스크립트 객체가 다른 객체로부터 메서드와 속성을 상속받는 매커니즘
// 이것을 프로토타입 체인이라고 부른다.
// 위의 예시처럼 프로토타입 안에 있는 hasOwnProperty를 상속받아 사용하고 있다.
// 이렇게 더 적은 메모리를 사용하여 코드를 재사용하며 작성 가능

// return을 안해도 자동으로 객체의 인스턴스를 return 한다.
function Person(name, email, birthday) {
  this.name = name;
  this.email = email;
  this.birthday = new Date(birthday);
//   this.calculateAge = function () {
//     const diff = Date.now() = this.birthday.getTime();
//     const ageDate = new Date(diff)
//     return Math.abs(ageDate.getUTCFullYear()-1970)
//   };
}
// 해당 코드에서 name, email, birthday의 값은 다르겠지만
// calculateAge 프로퍼티의 값은 같다. 해당 메서드를 prototype으로 변환해보자

Person.prototype.calculateAge=function(){
    const diff = Date.now() = this.birthday.getTime();
    const ageDate = new Date(diff)
    return Math.abs(ageDate.getUTCFullYear()-1970)
} 