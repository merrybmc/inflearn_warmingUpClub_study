/**
 * createElement
 *
 * document.createElement(태그 이름);
 * createElement 메서드에 태그 이름을 넣어서 태그 요소 생성 가능
 */

// li 생성할 태그 만들기
const li = document.createElement('li');

// 태그에 class 속성 추가하기
li.className = 'list-group-item';

// 태그에 id 속성 추가
li.id = 'new-Item';

// 다른 속성 추가
li.setAttribute('name', 'New List Item');

const ul = document.querySelector('list-group');

// 태그 추가
ul.appendChild = li;

// 태그 삭제
ul.removeChild = li;

const link = document.createElement('a');

link.className = 'alarm-item';

// 태그 내에 요소 추가
link.innerHTML = `<i class="bi-alarm></i>`;

li.appendChild(link);

ul.appendChild('link');

// 요소 삭제하기
const list = document.querySelector('list-group-item');
ul.removeChild(list[0]);

// 요소 수정하기
const newElement = document.createElement('span');

newElement.textContent = 'Hello';

// 요소 수정하기
list.parentNode.replaceChild(newElement, list);
