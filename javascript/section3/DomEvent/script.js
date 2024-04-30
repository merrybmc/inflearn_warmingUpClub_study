/**
 * DOM 이벤트
 *
 * 어떠한 버튼을 클릭했을 때 어떠한 액션이 일어나게 하려면 "이벤트" 를 발생시켜야 한다.
 *
 * Event listener
 * 어떠한 액션이 일어나게하기 위해 함수를 호출하는데 쓰이는 것
 *
 * addEventListener
 * 어떠한 이벤트가 발생했을 때 이벤트 리스너를 호출하기 위해서는 이벤트 리스너를 해당 객체나 요소에 등록을 해주어야 한다.
 *
 */

// 기본 사용법
const text = document.getElementById('text');

const btn = document.querySelector('button');

btn.addEventListener('click', (event) => {
  console.log(event);
  console.log(event.target);
  alert('버튼 클릭');
});

/**
 * Event 종류
 *
 * - UI
 * load = HTML 문서가 로드 완료되었을 때 발생
 * change = 요소의 내용이 변경되거나 foucs에서 벗어났을 때 발생
 * resize = 요소의 크기가 바뀌었을 때 발생
 * scroll = 스크롤이 조작되었을 때 발생
 * error = 에러가 발생했을 때 발생
 *
 * - keyboard
 * keydown = 키를 눌렀을 때 발생
 * keyup = 키를 눌렀다가 뗐을 때 발생
 * keypress = 사용자가 눌렀던 키의 문자가 입력되었을 때 발생
 *
 * - mouse
 * click 요소를 클릭했을 때 발생
 * dblclick 요소를 더블클릭 했을 때 발생
 * mousedown 클릭했을 때 발생
 * mouseout 마우스가 요소 밖으로 나갔을 때 발생
 * mouseover 마우스가 요소 안으로 들어왔을 때 발생
 * mousemove 마우스가 움직일 때 발생
 * mouseup 마우스가 멈췄을 때 발생
 *
 * - focus
 * focus 요소에 focus가 되었을 때 발생
 * blur 요소에 foucs가 벗어났을 때 발생
 */
