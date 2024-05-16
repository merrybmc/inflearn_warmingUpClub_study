/**
 * Observer Pattern
 *
 * event-driven 시스템을 이용하는 것을 Observer Design Pattern이라고 부른다.
 *
 * 이 패턴에는 특정 Subject를 관찰하는 많은 Observer가 존재
 * 관찰자는 기본적으로 관심이 있고 해당 주제에 내부 변경 사항이 있을 때 알림을 받기를 원함
 * 그래서 Observer들은 그 주제에 스스로 등록(Register)를 함
 * 주제에 대한 관심을 잃으면 해당 주제에 등록을 취소
 *
 * 이 모델을 게시자-구독자 (Publisher-Subscriber)모델이라고도 부름
 */

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');

function sendToGoogleAnalytics(data) {
  console.log(data);
}

function sendToCustomAnalytics(data) {
  console.log(data);
}

function sendToEmail(data) {
  console.log(data);
}

const observers = [];

const Observer = Object.freeze({
  notify: (data) => observers.forEach((observer) => observer(data)),
  subscribe: (func) => observers.push(func),
  unsubscribe: (func) => {
    [...observers].forEach((observer, index) => {
      if (observer === func) {
        observers.splice(index, 1);
      }
    });
  },
});

// Observer들이 Subject 관찰중
Observer.subscribe(sendToGoogleAnalytics);
Observer.subscribe(sendToCustomAnalytics);
Observer.subscribe(sendToEmail);

// 버튼이 클릭되면 Subject가 Observer에게 notify 전송
btn1.addEventListener('click', () => {
  const data = 'click btn1';
  Observer.notify(data);
});
