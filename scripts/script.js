const btnMobile = document.querySelector('label[for="checkbox-menu"]');

function toggleMenu() {
  const nav = document.querySelector('.menu-mobile');
  nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);