const burgerBtn = document.querySelector('#burger'),
  navList = document.querySelector('.nav-list'),
  navItems = document.querySelectorAll('.nav-item');

const callMenu = () => {
  burgerBtn.innerHTML = 'close';
  burgerBtn.style.color = '#ffffff';
  navList.style.display = 'flex';
}

const closeMenu = () => {
  burgerBtn.innerHTML = 'menu';
  burgerBtn.style.color = '#000000';
  navList.style.display = 'none';
}

burgerBtn.addEventListener('click', () => {
  burgerBtn.innerHTML === 'menu' ? callMenu() : closeMenu();
});

if (window.matchMedia("(max-width: 720px) and (min-width: 320px)").matches) {
  navItems.forEach(navItem => {
    navItem.addEventListener('click', closeMenu);
  });
}
