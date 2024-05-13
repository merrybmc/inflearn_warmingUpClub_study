/**
 * Promise
 *
 * Promise 객체는 enw 키워드와 생성자를 사용하여 만든다.
 *
 * 생성자는 매개변수로 "실행 함수"를 받는다.
 *
 * 이 함수는 매개 변수로 두 가지 함수를 받아야 하는데
 * 첫 번째 함수(resolve)는 비동기 작업을 성공적으로 완료해 결과를 값으로 반환할 때 호출해야 하고
 * 두 번째 함수(reject)는 작업이 실패하여 오류의 원인을 반환할 때 호출하면 된다.
 * 두 번째 함수는 주로 오류 객체를 받는다.
 */

const myFirstPromise = new Promise((resolve, reject) => {
  // 비동기 작업 후
  const somValue = 10;

  // 성공 값 return
  resolve(somValue);

  // 실패 값 리턴
  reject('error');
});

// example
function fetchData() {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve('성공');
    } else {
      reject('실패');
    }
  });
}

fetchData()
  .then(function (result) {
    console.log(result); // 성공
  })
  .catch(
    (error) => console.log(error) // 실패
  )
  .finally(console.log('비동기 요청')); // 여부 상관없이 실행

/**
 * Promise는 다음 중 하나의 상태를 가진다.
 * 대기(pending) : 비동기 처리 로직이 아직 완료되지 않은 상태
 * 이행(fullfilled) : 비동기 처리가 완료되어 프로미스가 결과 값을 반환해준 상태
 * 거부(rejected) : 비동기 처리가 실패하거나 오류가 발생한 상태
 */

// 대기중인 프로미스는 값과 함께 이행할 수도, 어떤 오류로 인해 거부될 수도 있다.
// 이행이나 거부될 때, 프로미스의 then 메서드에 의해 대기열(큐)에 추가된 처리기들이 호출된다.
// 이미 이행했거나 거부된 프로미스에 처리기를 연결해도 호출되므로, 비동기 연산과 처리기 연결 사이에 경합 조건은 없다.
