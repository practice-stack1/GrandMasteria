import './basic/ibg';
import './basic/webp';
import header from './modules/sections/header';
import spoiler from './modules/spoiler';

window.addEventListener('DOMContentLoaded', () => {
  "use strict"

  header('.header__burger', '.header__menu', '.header__contacts a', '.header__item a');
  spoiler('.about__body', '.about__body .about__text');
});