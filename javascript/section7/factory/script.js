// Factory Pattern

/**
 * 특수 함수인 팩토리 함수를 사용하여 비슷한 객체를 많이 만들 수 있다.
 * 비슷한 객체를 반복적으로 생성해야하는 경우 주로 사용된다.
 */
// 일반적인 코드
const book1 = {
  title: '',
  author: '',
  isbn: '',
};

const book2 = {
  tiltle: '',
  author: '',
  isbn: '',
};

const book3 = {
  tiltle: '',
  author: '',
  isbn: '',
};

// 팩토리 함수

const createBook = (title, author, isbn) => ({
  title,
  author,
  isbn,
});

const book4 = createBook('harry', 'jk', 'ab123');
const book5 = createBook('potter', 'rowling', 'ab456');

// 동일한 코드를 계속 반복할 필요없이 동일한 속성을 공유하는 여러 객체를 만들 때 유용
