// var = 함수 레벨 스코프
function func() {
  if (true) {
    var a = 'a';
    console.log(a); // 유효한 참조 범위 // a
  }
  console.log(a); // 유효한 참조 범위 // a
}

// let, const = 블록 레벨 스코프
function func2() {
  if (true) {
    let b = 'b';
    console.log(b); // 유효한 참조 범위 // b
  }
  console.log(b); // 유효하지 않은 참조 범위 // undefined
}
