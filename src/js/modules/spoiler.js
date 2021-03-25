const spoiler = (body, text_container) => {
  const containers = document.querySelectorAll(text_container);
  const wrappers = document.querySelectorAll(body);

  window.addEventListener('orientationchange', () => {
    window.addEventListener('resize', () => {
      try {
        wrappers.forEach((wrapper, i) => {
          if(wrapper.dataset.changed === 'true'){
            clearStyle(wrapper, containers[i]);
          }
            styleChange(containers[i], wrapper);
        });
        arrowClick();
      } catch (error) {}
    });
  });
  wrappers.forEach((wrapper, i) => {
    styleChange(containers[i], wrapper);
  });
  arrowClick();




  function styleChange(container, wrapper){
    try {
      if(document.body.clientWidth <= 500){
        wrapper.dataset.changed = 'true';
          container.children.forEach(p => {
            if(p.dataset.hide === 'true'){
              p.classList.add('no-display');
            }
          });
        createArrow(wrapper);
      }
    } catch (error) {}
  }

  function arrowClick(){
    const arrows = document.querySelectorAll('.arrow-wrapper');
    const img = document.querySelectorAll('.arrow-img');
    arrows.forEach((arrow, i) => {

      arrow.addEventListener('click', () => {
        try {
          if(img[i].classList.contains('rotate')){
            img[i].classList.remove('rotate');
            containers[i].querySelectorAll('[data-hide]').forEach(p => {
              p.classList.add('no-display');
            });
          } else {
            img[i].classList.add('rotate');
            containers[i].querySelectorAll('[data-hide]').forEach(p => {
              p.classList.remove('no-display');
            });
          }
        } catch (error) {}
      });
    });
  }

  function clearStyle(wrapper, container){
    wrapper.querySelector('.arrow-wrapper').remove();
    container.querySelectorAll('[data-hide]').forEach(p => {
      p.classList.remove('no-display');
    });
    wrapper.dataset.changed = 'false';
  }

  function createArrow(wrapper){
    const div = document.createElement('div');
    div.classList.add('arrow-wrapper');
    const img = document.createElement('img');
    img.classList.add('arrow-img');
    makeStyle(div, img);
    img.setAttribute('src', 'icons/arrow_b.svg');
    img.setAttribute('alt', 'arrow-bottom');
    div.appendChild(img);
    wrapper.appendChild(div);
  }
  function makeStyle(div, img){
    div.style.cssText = `
      width: 22px;
      height: 9px;
      margin: 12px auto 8px auto;
    `;
    img.style.cssText = `
      width: 100%;
      transition: 0.5s transform ease;
    `;
  }
};

export default spoiler;