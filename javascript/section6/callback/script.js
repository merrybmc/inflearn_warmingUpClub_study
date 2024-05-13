/**
 * 자바스크립트는 싱글스레드 입니다.
 *
 * 그래서 하나의 일을 할 때 하나밖에 못하는데 만약 그 하나의 일이 오래 걸리는 일이라면 어떻게 될까?
 * 그 하나의 일이 오래 걸리기에 다른 작업들은 그 하나의 일이 끝나기 까지 기다려야 한다.
 *
 * 이러한 문제점을 해결하기 위해 비동기로 어떠한 일을 수행하게 된다.
 */

// 만약 비동기 요청이 여러 개 있을 때 하나의 요청이 다른 요청의 결과에 의존한다면?
// example
// 1st request
const res1 = request('http');
const res2 = request('http');

// 이 경우 Callback 함수, Promise, Async Await을 이용하는 3가지 방법으로 해결 가능

// Callback
// 특정 함수에 매개변수로 전달된 함수를 의미
// 함수를 전달받은 함수 안에서 함수를 호출

function firstFunction(parameters, callback) {
  const res1 = request('http');
  callback(res1);
}
function secondFunction(parameters, callback) {
  const res2 = request('http');
  callback();
}

firstFunction(parameter, function (res1) {
  secondFunction(res1, function () {
    thirdFunction(paramter, function () {});
  });
});
// 단점
// 가독성 저하
// 에러 처리를 한다면 모든 콜백에서 각각 에러 핸들링을 해주어야 한다.
