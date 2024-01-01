'use strict';

// Check if the user has a theme preference in local storage
const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
  document.body.classList.remove('light-theme', 'dark-theme');
  document.body.classList.add(savedTheme);

  // Set initial state of themeBtn based on savedTheme
  const themeBtn = document.querySelectorAll('.theme-btn');
  for (let i = 0; i < themeBtn.length; i++) {
    themeBtn[i].classList.toggle('light', savedTheme === 'light-theme');
    themeBtn[i].classList.toggle('dark', savedTheme === 'dark-theme');
    themeBtn[i].addEventListener('click', toggleTheme);
  }
}

// navbar variables
const nav = document.querySelector('.mobile-nav');
const navMenuBtn = document.querySelector('.nav-menu-btn');
const navCloseBtn = document.querySelector('.nav-close-btn');

// navToggle function
const navToggleFunc = function () {
  nav.classList.toggle('active');
}

navMenuBtn.addEventListener('click', navToggleFunc);
navCloseBtn.addEventListener('click', navToggleFunc);

// theme toggle function
function toggleTheme() {
  // toggle `light-theme` & `dark-theme` class from `body`
  // when clicked `theme-btn`
  document.body.classList.toggle('light-theme');
  document.body.classList.toggle('dark-theme');

  // Toggle classes for all `theme-btn`.
  const themeBtn = document.querySelectorAll('.theme-btn');
  for (let i = 0; i < themeBtn.length; i++) {
    themeBtn[i].classList.toggle('light', document.body.classList.contains('light-theme'));
    themeBtn[i].classList.toggle('dark', document.body.classList.contains('dark-theme'));
  }

  // Save the current theme preference to local storage
  const currentTheme = document.body.classList.contains('light-theme') ? 'light-theme' : 'dark-theme';
  localStorage.setItem('theme', currentTheme);
}

// theme toggle variables
const themeBtn = document.querySelectorAll('.theme-btn');
for (let i = 0; i < themeBtn.length; i++) {
  themeBtn[i].addEventListener('click', toggleTheme);
}
