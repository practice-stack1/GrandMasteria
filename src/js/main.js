import './basic/ibg';
import './basic/webp';
import './basic/dynamic_adaptive';
import header from './modules/sections/header';
import spoiler from './modules/spoiler';
import navigation from './modules/sections/short_nav';
import conection from './modules/conections';
import checkNumInput from './modules/checkNumInputs';
import checkTextInputs from './modules/checkTextInputs';
import mask from './modules/mask';
import tab from './modules/tab';
import showMore from './modules/showMore';
import ibg from './basic/ibg';
import modal from './modules/modal';
import tabSlider from './modules/slider';
import setpage from './modules/setPage';
import './modules/up';
import checkerMobile from './modules/checkMobile';


window.addEventListener('DOMContentLoaded', () => {
  "use strict"
  checkerMobile();
  ibg();
  header('.header__burger', '.header__menu', '.header__item a');
  conection('.header__contacts a');
  conection('.footer__phone_tel a');
  spoiler('.about__body', '.about__body .about__text', 500);
  spoiler('.answears__body', '.answears__body .answears__text', 767);
  navigation('.short-nav__column');
  navigation('.info__text a');
  setpage('.header__item a');
  setpage('.short-nav__btn a');
  checkNumInput('._no-symbol');
  checkTextInputs('._no-num');
  mask('[name="phone"]');
  tab('.tab', '.tab__item','.accessories__slide' , '[data-tab]', 'active', 'block', 'flex');
  tab('.tab', '.tab__item', '.galary__slide', null, 'active', 'block');
  modal('.galary__slide-wrapper', '.modal__wrapper', '.overlay', '.modal__close img', '.modal__more', '.modal__info', '.galary__btn');
  showMore('.galary__slide', '[data-section]', '.galary__slide-wrapper', '.galary__item', 9, 'Завантажити більше');
  showMore('.accessories__slide', '[data-section]','.accessories__slide-wrapper', '.accessories__slide-wrapper a', 9, 'Завантажити більше');
  tabSlider('.tab__wrapper', '.tab__item', '.tab__arrow_left', '.tab__arrow_right');
  ibg();

});