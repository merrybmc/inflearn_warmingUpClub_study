const list = document.querySelector('ul.list-group');
console.log(list);

const listItem = document.querySelector('li.list-group-item:first-child');
console.log(listItem);

let val = list.childNodes;
console.log(val);
val = list.childNodes[0];
console.log(val);
val = list.childNodes[0].nodeName;
console.log(val);
val = list.childNodes[0].nodeType;

val = list.children;
console.log(val);
val = list.children[1];
console.log(val);

val = listItem.parentNode;
console.log(val);
val = listItem.parentElement;
console.log(val);
val = listItem.parentElement.parentElement;

val = listItem.nextSibling;
console.log(val);
val = listItem.nextElementSibling;
console.log(val);
val = listItem.nextElementSibling.nextElementSibling;
console.log(val);
val = listItem.nextElementSibling.nextElementSibling.previousSibling;
console.log(val);

console.log(val);
