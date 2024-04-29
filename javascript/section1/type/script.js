/**
 * 원시 타입 : Boolean, String, Number, null, undefined, Symbol (불변성을 가지고 있다.)
 * 참조 타입 : Object, Array (객체, 배열)
 *
 * 기본적으로 JavaScript는 원시 타입에 대한 값을 저장하기 위해 Call Stack 메모리 공간을 사용하지만
 * 참조 타입의 경우 Heap 이라는 별도의 메모리 공간을 사용한다.
 * 이 경우 Call Stack은 객체 및 배열 값이 아닌 Heap 메모리 참조 ID를 값으로 저장한다.
 *
 * 원시 타입 -> 고정된 크기로 Call Stack 메모리에 저장, 실제 데이터가 변수에 할당
 * 참조 타입 -> 데이터 크기가 정해지지 않고 Call Stack 메모리에 저장
 *              데이터의 값이 heap에 저장되며 변수에 heap 메모리의 주소값이 할당
 */

/**
 * 원시 타입
 *
 * string : 문자열
 * number : 숫자
 * booelan : true / false
 * null : null 값이 없음을 나타냄
 * undefined : undefined 초기화되지 않은 변수, 값이 할당되지 않은 상태
 * symbol : 변경 불가능한 유일한 값을 생성할 때 사용, 값 자체의 확인이 불가능하며 외부로 노출되지 않는다. ES6에서 새로 생긴 타입이다.
 */

/**
 * 참조 타입
 * function : 함수
 * array : 배열
 * classes  : 클래스
 * object : 객체
 */

/**
 * 자바스크립트는 동적 타입이다.
 *
 * JavaScript는 느슨한 타입(loosely typed)의 동적(dynamic) 언어이다.
 * JavaScript의 변수는 어떤 특정 타입과 연결되지 않으며, 모든 타입의 값으로 할당 및 재할당 가능하다.
 *
 * - 같은 변수가 여러 개의 타입을 가질 수 있다.
 * - 타입을 명시하지 않아도 된다.
 * - 대부분의 다른 언어는 정적(Static) 타입 언어이다. (Java, C#, C++)
 */

let myVar = 1;
myVar = 'hello';
myVar = true;
myVar = null;
myVar = undefined;
myVar = { a: 1, b: 2 };
myVar = [1, 2];
myVar = Symbol();
myVar = 1;
