import isMobile from '../basic/checkMobile';
import ibg from '../basic/ibg';
const modal = (galary__wrapper, modal__wrapper, modal__overlay, modal__close, modal__more, modal__info) => {
  const overlay = document.querySelector(modal__overlay),
        close = document.querySelector(modal__close),
        more = document.querySelector(modal__more),
        info = document.querySelector(modal__info),
        triggers = document.querySelectorAll(galary__wrapper),//? - 4 контейрена для елементів
        modal = document.querySelector(modal__wrapper);//? - обготка модального вікна для передчі данних

  let wrapperId = null;
  let itemIndex = null;
  let length = null;
  const leftArrow = document.querySelector('.modal__arrow-left'),
        rightArrow = document.querySelector('.modal__arrow-right');

  let clicked = false;


  try {
    const scroll = calcScroll();
    triggers.forEach(trigger => {
      if(isMobile.any()){
        $(trigger).on('click', '.galary__img', function(e) {
          e.preventDefault();
          openModal(e.target);
        });
      } else {
        $(trigger).on('click', '.galary__item', function(e) {
          e.preventDefault();
          openModal(e.target);
        });
      }


    });
    overlay.addEventListener('click', (e) => {
      if(e.target === overlay || e.target === close){
        closeModal();
      };
    });
    more.addEventListener('click', (e) => {
      e.preventDefault();
      if(!clicked){
        more.classList.add('active');
        info.classList.add('active');
        clicked = true;
      } else {
        more.classList.remove('active');
        info.classList.remove('active');
        clicked = false;
      }
    });

    leftArrow.addEventListener('click', () => {
      itemIndex--;
      changeItem(wrapperId, itemIndex);
    });

    rightArrow.addEventListener('click', () => {
      itemIndex++;
      changeItem(wrapperId, itemIndex);
    });

    function closeModal(){
      overlay.classList.add('animated', 'fadeOut');
      setTimeout(() => {
        overlay.style.display = 'none';
        document.body.style.overflow = "auto";
        document.body.style.marginRight = `0px`;
      }, 700);

    }

    function openModal(target){
      if(!target.classList.contains('galary__item')){
        containModalMobile(target);
      } else {
        containModalDesk(target);
      }
      activateModal();
    }
    function containModalMobile(target){
      console.log(target);
      target = target.parentNode;
      wrapperId = target.parentNode.getAttribute('id');
      console.log(target, wrapperId);
      itemIndex = Number(target.getAttribute('data-count'));
      changeItem(wrapperId, itemIndex);
    }
    function containModalDesk(target){
      console.log(target);
      wrapperId = target.parentNode.getAttribute('id');
      console.log(target, wrapperId);
      itemIndex = Number(target.getAttribute('data-count'));
      changeItem(wrapperId, itemIndex);
    }

    function inputModalData({src, count, section}, modal){
      modal.querySelector('.modal__img img').setAttribute('src', `${src}`);
      ibg();
      modal.querySelector('.modal__section').textContent = section;
      modal.querySelector('.modal__count').textContent = count;
    }
    function getItemData(item){
      const img = item.querySelector('.galary__img img').getAttribute('src'),
            count = item.querySelector('.galary__counter').textContent,
            section = item.parentNode.previousElementSibling.textContent,
            data = {};
      data.src = img;
      data.count = count;
      data.section = section;

      return data;
    }
    function activateModal(){
      overlay.classList.remove('animated', 'fadeOut');
      overlay.classList.add('animated', 'fadeIn');
      overlay.style.display = 'block';
      document.body.style.overflow = "hidden";
      document.body.style.marginRight = `${scroll}px`;
    }
    function calcScroll() {
      let div = document.createElement('div');
      div.style.width = '50px';
      div.style.height = '50px';
      div.style.overflowY = 'scroll';
      div.style.visibility = 'hidden';

      document.body.appendChild(div);
      let scrollWidth = div.offsetWidth - div.clientWidth;
      div.remove();

      return scrollWidth;
    }

    function changeItem(id, index){
      length = $(`#${id} .galary__item`).length - 1;
      // console.log(itemIndex, index);
      if(index > length){
        itemIndex = 0;
      } else if(index < 0) {
        itemIndex = length;
      }
      index = itemIndex;
      // console.log(itemIndex, index);
      $(`#${id} .galary__item`).each(function(i, item) {
        if(i === index){
          console.log(id, item, index);
          const itemData = getItemData(item);
          inputModalData(itemData, modal);
        }
      });
    }
  } catch (error) {}

};

export default modal;