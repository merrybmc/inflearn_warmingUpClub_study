/**
 * Module Pattern
 *
 * 코드를 더 작고 재사용 가능한 조각으로 분할
 *
 * 더 큰 파일을 여러 개의 더 작고 재사용 가능한 조각으로 분할하는 좋은 방법
 * 또한 모듈 내의 값은 기본적으로 모듈 내에서 비공개로 유지되고 수정할 수 없기 때문에 코드 캡슐화를 촉진
 * export 키워드를 사용하여 명시적으로 내보낸 값만 다른 파일에서 액세스 가능
 */

// 모듈 패턴을 사용하지 않은 코드
export function validateInput(input) {
  if (typeof input !== 'number') {
    throw new Error('Invalid input');
  }
}

export function sum(x, y) {
  return x + y;
}

export function multiply(x, y) {
  return x * y;
}

/**
 * export 지시자를 변수나 함수 앞에 붙이면 외부 모듈에서 해당 변수나 함수에 접근 가능
 *
 */

// 모듈은 특수한 키워드나 기능과 함께 사용되므로 type="module" 같은 속성을 설정해 해당 스크립트가 모듈이란걸 브라우저가 알 수 있게 해야됨
// 브라우저가 자동으로 모듈을 가져오고 평가한 다음, 이를 실행
<body>
  <script src='' type='module'></script>
</body>;

/**
 * 모듈의 특징
 * 1. 항상 엄격 모드로 실행
 * 2. 지연 실행
 * 3. 인라인 모듈 스크립트를 비동기 처리 가능
 * 4. 외부 오리진에서 스크립트를 불러오려면 CORS 헤더가 필요
 * 5. 중복된 스크립트는 무시
 */
