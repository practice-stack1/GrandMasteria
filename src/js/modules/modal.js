const modal = (galary__wrapper, modal__overlay, modal__close, modal__more, modal__info) => {
  const overlay = document.querySelector(modal__overlay),
        close = document.querySelector(modal__close),
        more = document.querySelector(modal__more),
        info = document.querySelector(modal__info),
        triggers = document.querySelectorAll(galary__wrapper);
        scroll = calcScroll();

  let clicked = false;


  triggers.forEach(trigger => {
    $(trigger).on('click touchstart', '.galary__img', function(e) {
      e.preventDefault();
      openModal();
    });
    $(trigger).on('click', '.galary__item', function(e) {
      e.preventDefault();
      openModal();
    });
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
      document.body.style.overflow = "";
      document.body.style.marginRight = `0px`;
    }, 700);

  }
  function openModal(){
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

};

export default modal;