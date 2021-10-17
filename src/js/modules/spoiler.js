const spoiler = (body, text_container, range) => {
  const containers = document.querySelectorAll(text_container);
  const wrappers = document.querySelectorAll(body);
 if(wrappers[0]){
    window.addEventListener('orientationchange', () => {
      window.addEventListener('resize', () => {
        try {
          wrappers.forEach((wrapper, i) => {
            if(wrapper.dataset.changed === 'true'){
              clearStyle(wrapper, containers[i]);
            }
              styleChange(containers[i], wrapper);
              if(wrappers.length - 1 === i){
                arrowClick();
              }
          });

        } catch (error) {}
      });
    });
    wrappers.forEach((wrapper, i) => {
      styleChange(containers[i], wrapper);
      if(wrappers.length - 1 === i){
        arrowClick();
      }
    });




    function styleChange(container, wrapper){
      try {
        if(document.body.clientWidth <= range){
          wrapper.dataset.changed = 'true';
            container.children.forEach(p => {
              if(p.dataset.hide === 'true'){
                p.classList.add('no-display', 'animated');
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

        arrow.addEventListener('click', (e) => {
          e.preventDefault();
          try {
            if(img[i].classList.contains('rotate')){
              img[i].classList.remove('rotate');
              containers[i].querySelectorAll('[data-hide]').forEach(p => {
                p.classList.remove('fadeIn');
                p.classList.add('fadeOut');
                setTimeout(() => {
                  p.classList.add('no-display');
                }, 600);
              });
            } else {
              img[i].classList.add('rotate');
              containers[i].querySelectorAll('[data-hide]').forEach(p => {
                p.classList.remove('fadeOut', 'no-display');
                p.classList.add('fadeIn');
              });
            }
          } catch (error) {}
        });
      });
    }
    function clearStyle(wrapper, container){
      wrapper.querySelector('.arrow-wrapper').remove();
      container.querySelectorAll('[data-hide]').forEach(p => {
        p.classList.remove('no-display', 'animated', 'fadeIn', 'fadeOut');
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
 }
};

export default spoiler;