/**
 * Closure
 *
 * 다른 함수 내부에 정의된 함수가 있는 경우 외부 함수가 실행을 완료하고
 * 해당 변수가 해당 함수 외부에서 더 이상 액세스할 수 없는 경우에도
 * 해당 내부 함수는 외부 함수의 변수 범위에 액세스할 수 있다.
 */

function outerFunction(outerVariable) {
  // 외부
  return function innerFunction(innerVariable) {
    // 내부
    console.log('Outer Variable:' + outerVariable);
    console.log('Inner Variable:' + innerVariable);
  };
}

// 함수가 함수를 리턴하기 때문에 newFunction는 함수가 된다.
const newFunction = outerFunction('outside'); // 외부
newFunction('inside'); // 내부

// console 결과
// Outer Variable:outside
// Inner Variable:inside

/**
 * 원리
 * 1. outerFunction("outside")은 변수 "newFunction"에 할당되는 즉시 호출된다.
 * 2. 호출되면 outerFunction은 변수 "newFunction"에 outerFunction(outerVariable) 가 아닌
 * InnerFunction(InnerVariable)을 반환한다.
 * 3. 그런 다음 변수 newFunction("inside")를 호출하여 InnerFunction("inside")을 호출한다.
 * Closure는 InnerFunction이 원래 outerFunction("outside")로 설정한 outerVariable 매개변수를 기억하고 액세스할 수 있다.
 * 따라서 "inside"로만 호출되었더라도 외부의 "outside"와 내부의 "inside" 모두 출력할 수 있다.
 *
 */
