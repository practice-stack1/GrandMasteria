import './basic/ibg';
import './basic/webp';
import './basic/dynamic_adaptive';
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
import modal from './modules/modal';
import tabSlider from './modules/slider';

window.addEventListener('DOMContentLoaded', () => {
  "use strict"
  ibg();
  header('.header__burger', '.header__menu', '.header__item a');
  conection('.header__contacts a');
  conection('.footer__phone_tel a');
  spoiler('.about__body', '.about__body .about__text');
  spoiler('.info__content', '.info__content .info__text');
  navigation('.short-nav__column');
  forms('.form');
  checkNumInput('._no-symbol');
  checkTextInputs('._no-num');
  mask('[name="phone"]');
  tab('.tab', '.tab__item', '.galary__slide', 'active', 'block');
  tab('.tab', '.tab__item', '[data-tab]', 'active', 'flex');
  modal('.galary__slide-wrapper', '.modal__wrapper', '.overlay', '.modal__close img', '.modal__more', '.modal__info', '.galary__btn');
  showMore('.galary__btn', '[data-section]');
  tabSlider('.tab__wrapper', '.tab__item', '.tab__arrow_left', '.tab__arrow_right');
});