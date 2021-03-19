const modal = (modal__tirgger, modal__wrapper, modal__overlay, modal__close, modal__more, modal__info, show__more) => {
  let triggers = document.querySelectorAll(modal__tirgger);
  const modals = document.querySelector(modal__wrapper),
        overlay = document.querySelector(modal__overlay),
        close = document.querySelector(modal__close),
        more = document.querySelector(modal__more),
        info = document.querySelector(modal__info),
        show_more = document.querySelectorAll(show__more),
        scroll = calcScroll();

  let clicked = false;


  function openModal(e) {
    e.preventDefault();
    overlay.classList.remove('animated', 'fadeOut');
    overlay.classList.add('animated', 'fadeIn');
    overlay.style.display = 'block';
    document.body.style.overflow = "hidden";
    document.body.style.marginRight = `${scroll}px`;
  }

  // show_more.forEach(item => {
  //   item.addEventListener('click', (e) => {
  //     e.preventDefault();
  //     triggers.forEach(trigger => {
  //       trigger.removeEventListener('click',  openModal);
  //     });
  //     let new_triggers = document.querySelectorAll(modal__tirgger);
  //     new_triggers.forEach(trigger => {
  //       console.log(trigger);
  //       trigger.addEventListener('click',  openModal);
  //     });
  //   });
  // });

  triggers.forEach(trigger => {
    trigger.addEventListener('click', openModal);
  });

  close.addEventListener('click', () => {
    closeModal();
  });
  overlay.addEventListener('click', () => {
    closeModal();
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
    }, 700);
    document.body.style.overflow = "";
    document.body.style.marginRight = `0px`;
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