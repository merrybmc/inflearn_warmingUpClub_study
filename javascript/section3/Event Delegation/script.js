const buttons = document.getElementsByClassName('buttonClass');

console.log(buttons);

for (const button of buttons) {
  button.addEventListener('click', () => alert('clicked'));
}

const buttonList = document.querySelector('.buttons');
const button = document.createElement('button');
button.setAttribute('class', 'buttonClass');
button.innerText = 'Click Me';
buttonList.appendChild(button);
