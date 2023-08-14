const navImg = document.getElementById('nav-img');
const menu = document.getElementById('menu');

navImg.addEventListener('click', () => {
  console.log('hello');
  if (menu.classList.contains('remove')) {
    console.log(menu.classList);
    menu.classList.toggle('menu');
    menu.classList.remove('remove');
  } else {
    console.log(menu.classList);
    menu.classList.remove('menu');
    menu.classList.toggle('remove');
  }
});
const print = () => {
  console.log('hello');
};
print();
