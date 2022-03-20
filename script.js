const burgerBtn = document.querySelector('#burger'),
  navList = document.querySelector('.nav-list'),
  navItems = document.querySelectorAll('.nav-item');

const callMenu = () => {
  burgerBtn.innerHTML = 'close';
  burgerBtn.style.color = '#ffffff';
  navList.classList.add('open');
  navList.classList.remove('close');
}

const closeMenu = () => {
  burgerBtn.innerHTML = 'menu';
  burgerBtn.style.color = '#000000';
  navList.classList.remove('open');
  navList.classList.add('close');

}

burgerBtn.addEventListener('click', () => {
  burgerBtn.innerHTML === 'menu' ? callMenu() : closeMenu();
});

navItems.forEach(navItem => {
  navItem.addEventListener('click', closeMenu);
});
