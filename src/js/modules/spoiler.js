const spoiler = (body, text_container) => {
  const container = document.querySelector(text_container);
  const wrapper = document.querySelector(body);

  window.addEventListener('orientationchange', () => {
    window.addEventListener('resize', () => {
      if(wrapper.dataset.changed === 'true'){
        clearStyle(wrapper);
      }
        styleChange(container, wrapper);
        console.log(document.body.clientWidth);
    });

  });
  styleChange(container, wrapper);



  function styleChange(container, wrapper){
    if(document.body.clientWidth <= 500){
      wrapper.dataset.changed = 'true';
      container.children.forEach(p => {
        if(p.dataset.hide === 'true'){
          p.classList.add('no-display');
        }
      });
      createArrow(wrapper);
      const arrows = document.querySelectorAll('.arrow-wrapper');
      arrows.forEach(arrow => {
        arrow.addEventListener('click', () => {
          const img = document.querySelector('.arrow-img');
          if(img.classList.contains('rotate')){
            img.classList.remove('rotate');
            document.querySelector('[data-hide]').classList.add('no-display');
          } else {
            img.classList.add('rotate');
            document.querySelector('[data-hide]').classList.remove('no-display');
          }
        });
      });
    }
  }

  function clearStyle(wrapper){
    document.querySelector('.arrow-wrapper').remove();
    document.querySelector('[data-hide]').classList.remove('no-display');
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