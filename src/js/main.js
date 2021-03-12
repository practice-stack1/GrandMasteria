import './basic/ibg';
import './basic/webp';
import header from './modules/sections/header';
import spoiler from './modules/spoiler';
import navigation from './modules/sections/short_nav';
import forms from './modules/forms';
import conection from './modules/conections';
import checkNumInput from './modules/checkNumInputs';
import checkTextInputs from './modules/checkTextInputs';
import mask from './modules/mask';
import tab from './modules/tab';
import showMore from './modules/showMore';
import ibg from './basic/ibg';

window.addEventListener('DOMContentLoaded', () => {
  "use strict"
  ibg();
  header('.header__burger', '.header__menu', '.header__item a');
  conection('.header__contacts a');
  conection('.footer__phone_tel a');
  spoiler('.about__body', '.about__body .about__text');
  navigation('.short-nav__column');
  forms('.footer__forms');
  checkNumInput('._no-symbol');
  checkTextInputs('._no-num');
  mask('[name="phone"]');
  tab('.tab', '.tab__item', '.galary__slide', 'active', 'block');
  showMore('.galary__btn');
});