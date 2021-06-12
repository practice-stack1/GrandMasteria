import isMobile from '../basic/checkMobile';
import ibg from '../basic/ibg';
const modal = (galary__wrapper, modal__wrapper, modal__overlay, modal__close, modal__more, modal__info) => {
  const overlay = document.querySelector(modal__overlay),
        close = document.querySelector(modal__close),
        more = document.querySelector(modal__more),
        // info = document.querySelector(modal__info),//!
        triggers = document.querySelectorAll(galary__wrapper),
        modal = document.querySelector(modal__wrapper);


  let clicked = false;


  try {
    const scroll = calcScroll();
    triggers.forEach(trigger => {
      if(isMobile.any()){
        $(trigger).on('click', '.galary__img', function(e) {
          e.preventDefault();
          openModal(e.target, modal);
        });
      } else {
        $(trigger).on('click', '.galary__item', function(e) {
          e.preventDefault();
          openModal(e.target, modal);
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
    function closeModal(){
      overlay.classList.add('animated', 'fadeOut');
      setTimeout(() => {
        overlay.style.display = 'none';
        document.body.style.overflow = "auto";
        document.body.style.marginRight = `0px`;
      }, 700);

    }

    function openModal(target, modal){
      containModal(target, modal);
      activateModal();
    }
    function containModal(target, modal){
      if(!target.classList.contains('galary__item')){
        target = target.parentNode;
      }
      const itemData = getItemData(target);
      inputModalData(itemData, modal);
    }
    function inputModalData({src, count, section}, modal){
      modal.querySelector('.modal__img img').setAttribute('src', `${src}`);
      ibg();
      modal.querySelector('.modal__section').textContent = section;
      modal.querySelector('.modal__count').textContent = count;
      // const sizes = modal.querySelectorAll('.modal__sizes-item');//!
      // sizes.forEach((size, i)=> {//!
      //   size.textContent = info[i];//!
      // });//!
    }
    function getItemData(item){
      const img = item.querySelector('.galary__img img').getAttribute('src'),
            count = item.querySelector('.galary__counter').textContent,
            section = item.parentNode.previousElementSibling.textContent,
            // short_info = item.querySelector('.galary__short-info'), //!
            // info = [],//!
            data = {};
      // short_info.children.forEach(child => {//!
      //   info.push(child.textContent);//!
      // });//!
      data.src = img;
      data.count = count;
      data.section = section;
      // data.info = info;//!

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
  } catch (error) {}

};

export default modal;