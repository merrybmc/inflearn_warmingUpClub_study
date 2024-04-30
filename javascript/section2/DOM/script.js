/**
 * 브라우저에서 UI를 볼 수 있는 것은 HTML을 분석해서 보여주기 때문이다.
 * HTML은 요소(Element)들로 구성되어 있다.
 */

/**
 * DOM (Document Object Model) 문서 객체 모델
 *
 * 메모리에 웹 페이지 문서 구조를 트리 구조로 표현하여 웹 브라우저가 HTML 페이지를 인식하게 해준다.
 * 또한 웹페이지를 이루는 요소들을 자바스크립트가 이용할 수 있게끔 브라우저가 트리구조로 만든 객체 모델을 의미한다.
 *
 */

// 돔 조작
// 해당 메서드에서 제공해주는 API를 이용하여 조작 가능
// document를 이용하여 DOM 구조에 접근하거나 원하는 요소를 조작 가능

// 기본 최상위 메서드
val = window.document; // 객체를 트리 구조로 표현

val = document.baseURI; // 웹페이지의 URL 반환
val = document.head; // <head> 태그 반환
val = document.body; // <body> 태그 반환
val = document.forms; // <form> 태그 반환
val = document.forms[0].id; // 제일 앞 form 태그의 id 속성값 반환

// 태그 접근

// id
const headerContainer = document.getElementById('header');

// class
const footerContainer = document.querySelector('footer');

// 해당 태그를 가진 모든 요소 반환
const getAllTag = document.getElementsByTagName('div');

// 해당 클래스 이름을 가진 모든 태그 반환
const getAllClass = document.getElementsByClassName('hello');
const getAllClass2 = document.querySelectorAll('hello');

// 스타일 조작
headerContainer.style.display = 'none';

// 컨텐츠 조작
headerContainer.textContent = 'Text Content';

headerContainer.innerText = 'Inner Text';
headerContainer.innerHTML = '<span>Inner HTML</span>';
