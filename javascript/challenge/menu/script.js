const btnIcecream = document.querySelector('.head-icecream');
const btnCake = document.querySelector('.head-cake');
const btnDrink = document.querySelector('.head-drink');

const liIcecream = document.querySelector('.list-icecream');
const liCake = document.querySelector('.list-cake');
const liDrink = document.querySelector('.list-drink');

let state = 'icecream';

btnIcecream.addEventListener('click', () => {
  state = 'icecream';
  menuChange();
});
btnCake.addEventListener('click', () => {
  state = 'cake';
  menuChange();
});
btnDrink.addEventListener('click', () => {
  state = 'drink';
  menuChange();
});

const menuChange = () => {
  switch (state) {
    case 'icecream': {
      liIcecream.className = 'flex list-icecream';
      liCake.className = 'none list-cake';
      liDrink.className = 'none list-drink';
      break;
    }
    case 'cake': {
      liCake.className = 'flex list-cake';
      liIcecream.className = 'none list-icecream';
      liDrink.className = 'none list-drink';
      break;
    }
    case 'drink': {
      liDrink.className = 'flex list-drink';
      liIcecream.className = 'none list-icecream';
      liCake.className = 'none list-cake';
      break;
    }

    default:
      break;
  }
};
