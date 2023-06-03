const toggleBtn = document.querySelector('.nav_toggle');
const menu = document.querySelector('.nav__manual');

toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('active')
})
