import './basic/ibg';
import './basic/webp';
import header from './modules/header';

window.addEventListener('DOMContentLoaded', () => {
  "use strict"

  header('.header__burger', '.header__menu', '.header__contacts a', '.header__item a');

});