/**
 * Intersection observer
 *
 * broswer viewport와 설정한 요소의 교차점을 관찰한다.
 * 요소가 뷰포트에 포함되는지 안되는지, 사용자 화면에 보이는 요소인지 아닌지를 구별하는 기능이다.
 *
 * 비동기적으로 실행되기 때문에 scroll 이벤트 기반의 요소 관찰에서 발생하는 렌더링 성능이나
 * 이벤트 연속 호출같은 문제없이 사용 가능하다.
 */

const count = 20; // 새로운 Item이 추가될 때 추가되는 item의 개수
let itemIndex = 0; // item의 index

let observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const list = document.querySelector('.list');

      // 타겟 요소와 루트 요소가 교차하면 true
      if (entry.isIntersecting) {
        for (let i = itemIndex; i < itemIndex + count; i++) {
          // item을 count 개수만큼 생성하고 list에 추가
          let item = document.createElement('p');

          item.textContent = i;
          item.className += 'item';
          item.appendChild(item);
        }
        // itemIndex를 +count로 갱신
        itemIndex = itemIndex + count;
      }
    });
  },
  { root: null, threshold: 0.1 }
  // null을 설정하면 브라우저 viewport가 기준이 됨
  // threshold 0.1로 설정하면 타겟 요소의 10%가 루트 요소와 겹치면 콜백 실행
);

// list의 끝부분을 알려주는 p 타겟 요소를 관찰
observer.observe(document.querySelector('.end'));
