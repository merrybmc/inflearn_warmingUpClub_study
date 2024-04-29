/**
 * window 객체는 브라우저에 의해 자동으로 생성되며 웹 브라우저의 창(window)을 나타낸다.
 * 또한 window는 브라우저의 객체이며 javaScript의 객체가 아니다.
 *
 * window 객체를 통해 얻을 수 있는 장점
 * 1. 브라우저의 창에 대한 정보를 알 수 있다.
 * 2. 브라우저 창을 제어할 수 있다.
 * 3. var 키워드로 변수를 선언하거나 함수를 선언하면 window 객체의 프로퍼티가 된다.
 */

// Alert 단순 모달
alert('Hello World');

// Prompt 입력 모달
const input = prompt();
alert(input);

// Confirm 확인/취소 모달
if (confirm('Hello World')) {
  console.log('YES'); // 확인
} else {
  console.log('NO'); // 취소
}

// 브라우저 전체 영역
val = window.outerWidth; // 전체 가로
val = window.outerHeight; // 전체 세로

// 브라우저 화면 내부 영역
val = window.innerWidth; // 내부 가로
val = window.innerHeight; // 내부 세로

// 스크롤 위치
val = window.scrollX; // 가로 스크롤 위치
val = window.scrollY; // 세로 스크롤 위치

// 현재 URL 주소
val = window.location;

// history = 사용자가 방문한 기록이 쌓이게 됨

// 뒤로 가기
window.history.back(-1);

// 앞으로 가기
window.history.go(1);

// 방문한 페이지 수
val = window.history.length;
