'use strict';

const savedTheme = localStorage.getItem('theme');


if (savedTheme) {
  document.body.classList.remove('light-theme', 'dark-theme');
  document.body.classList.add(savedTheme);

  const themeBtn = document.querySelectorAll('.theme-btn');
  for (let i = 0; i < themeBtn.length; i++) {
    themeBtn[i].classList.toggle('light', savedTheme === 'light-theme');
    themeBtn[i].classList.toggle('dark', savedTheme === 'dark-theme');
    themeBtn[i].addEventListener('click', toggleTheme);
  }
}

const nav = document.querySelector('.mobile-nav');
const navMenuBtn = document.querySelector('.nav-menu-btn');
const navCloseBtn = document.querySelector('.nav-close-btn');


const navToggleFunc = function () {
  nav.classList.toggle('active');
}

navMenuBtn.addEventListener('click', navToggleFunc);
navCloseBtn.addEventListener('click', navToggleFunc);

function toggleTheme() {
  document.body.classList.toggle('light-theme');
  document.body.classList.toggle('dark-theme');

  const themeBtn = document.querySelectorAll('.theme-btn');
  for (let i = 0; i < themeBtn.length; i++) {
    themeBtn[i].classList.toggle('light', document.body.classList.contains('light-theme'));
    themeBtn[i].classList.toggle('dark', document.body.classList.contains('dark-theme'));
  }

  const currentTheme = document.body.classList.contains('light-theme') ? 'light-theme' : 'dark-theme';
  localStorage.setItem('theme', currentTheme);
}


const themeBtn = document.querySelectorAll('.theme-btn');
for (let i = 0; i < themeBtn.length; i++) {
  themeBtn[i].addEventListener('click', toggleTheme);
}
