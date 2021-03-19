import {getResource} from '../services/requests';
import ibg from '../basic/ibg';
const showMore = (btn__trigger) => {
  const triggers = document.querySelectorAll(btn__trigger);
    triggers.forEach(trigger => {
      trigger.addEventListener('click', function(){
        let wrap = trigger.parentElement;
        let section = wrap.dataset.section;
        getResource('./db.json')
          .then(res => {
            switchSection(res, wrap, section);
            ibg();
          })
          .catch(err => console.log(err))
          .finally(() => this.remove());
      });
    });


  function createItem(response, wrap){
    response.forEach(({src, counter, price, size}) => {
      let item = document.createElement('div');
      item.classList.add('galary__item');

      item.innerHTML = `
        <div class="galary__img ibg">
          <img src="${src}" alt="Фото продукції">
        </div>
        <div class="galary__counter">${counter}</div>
        <div class="galary__short-info">
          <div class="galary__info">${price}</div>
          <div class="galary__info">${size}</div>
        </div>
      `;
      item.classList.add('animated', 'fadeIn');

      wrap.querySelector('.galary__slide-wrapper').appendChild(item);
    });
  }

  function switchSection(res, wrap, section) {
    switch (section) {
      case 'single':
        createItem(res.single, wrap);
        break;
      case 'double':
        createItem(res.double, wrap);
        break;
      case 'triple':
        createItem(res.triple, wrap);
        break;
      case 'child':
        createItem(res.child, wrap);
        break;
      default:
        break;
    }
  }
};

export default showMore;