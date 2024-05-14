/**
 * Promise에 then 메서드를 체인 형식으로 호출하는 것보다 가독성이 좋다.
 * await은 async 내부 함수에서만 사용 가능하다.
 * 동기식 코드에서 쓰는 try catch 구문을 async/await 구문에서 사용 가능하다.
 */

async function makeRequest() {
  try {
    const res1 = await fetch('http');
    if (!res1) throw new Error('empty in res1');
    console.log(res1);
  } catch (error) {
    console.log(error.message);
  }
}
