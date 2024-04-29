/**
 * Hoisting 호이스팅
 *
 * 호이스트(Hoist)의 뜻은 무언가를 들어 올리거나 끌어 올리는 동작을 설명한다.
 * 자동차를 강에서 올린다 (Hoist) 라고 할 수 있다.
 *
 * JavaScript에서 호이스팅은 코드가 실행되기 전에
 * 변수 및 함수 선언(이름)이 로컬 범위(유효 범위)의 맨 위로 끌어올려지는 경우를 설명한다.
 */

/**
 * var 선언문 호이스팅
 *
 * 아래 코드 예시에서는 아직 생성하지 않은 변수에 대한 콘솔 로그가 시작된다.
 * 다음으로 greeting 이라는 변수를 선언하고 문자열 hello를 할당한다.
 * 코드가 실행되면 undefined가 반환된다.
 *
 * 이 코드가 에러를 발생시키지 않는 이유는 호이스팅 때문이다.
 *
 * JavaScript 인터프리터는 변수 생성의 선언(var greeting) 단계 및 할당 (= "hello") 단계를 분할한다.
 * 선언 부분은 코드가 실행되기 전에 현재 범위의 맨 위로 호이스팅되고 초기에 undefined 값이 할당된다.
 * 즉 초기화되기 전에 greeting 변수를 사용할 수 있게 된다.
 *
 */

console.log(greeting);
var greeting = 'hello';

/**
 * 함수 선언문 호이스팅
 *
 * 함수 선언전에 호출해도 올바른 출력이 된다.
 */

func();

function func() {
  console.log('hoisting test');
}

/**
 * let / const 선언문 호이스팅
 *
 * let 또는 const 변수를 선언하면 실제로 변수는 여전히 호이스팅 된다.
 * 그러나 차이점은 var와 실제 값이 할당되기전 까지 undefined 값이 할당된다.
 *
 * 하지만 let / const는 변수 초기에 어떤 값도 할당되지 않는다.
 *
 * 값이 할당되기 전에 콘솔로 출력하면 에러가 발생한다.
 *
 * 이러한 일이 발생하는 이유를 TDZ (Temporal Dead Zone) 이라고 한다.
 * 일시적 데드 존은 변수를 사용할 수 없는 일시적인 비활성 상태를 나타낸다.
 */

console.log(greeting2);
const greeting2 = 'hello';

// 변수를 생성할 때 재할당이 필요없다면 const를 사용
// 재할당이 필요하면 let을 사용하지만 변수의 scpoe를 최대한 좁게 만들어서 사용해주는걸 권장
