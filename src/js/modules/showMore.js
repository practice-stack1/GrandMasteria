import {getResource} from '../services/requests';
import ibg from '../basic/ibg';
import '../../lib/fslightbox';
const showMore = (btn__trigger = null, tab__slides = null, container, item, range, msg) => {
  const triggers = document.querySelectorAll(btn__trigger),
        slides = document.querySelectorAll(tab__slides);
    if(triggers.length !== 0){
      slides.forEach(slide => {
        let wrap = slide.querySelector(container);
        let section = slide.dataset.section;

        getResource('./db.json')
          .then(res => {
            switchSection(res, wrap, section, range);
            ibg();
          })
          .catch(err => console.log(err));
      });
      triggers.forEach(trigger => {
        $(trigger).on('click', '.galary__btn', function(e) {
          e.preventDefault();
          if(e.target.classList.contains('galary__btn') || e.target.parentNode.classList.contains('galary__btn')){
            let clicked;
            if(!e.target.classList.contains('galary__btn')){
              clicked = e.target.parentNode;
            } else { clicked = e.target; }
            const wrapper = clicked.previousElementSibling;
            let items = wrapper.querySelectorAll(item);
            items.forEach(item => {
              item.classList.remove('hide');
              item.classList.add('animated', 'fadeIn');
            });
            this.remove();
          }
        });
      });

      function createItem(response, wrap, visible_count){
        response.forEach(({src, srcset, counter}, i) => {
          let item = document.createElement('div');
          item.classList.add('galary__item');
          item.setAttribute('data-count', i);
          if(i > visible_count){
            item.classList.add('hide');
          }
          item.innerHTML = `
            <div class="galary__img">
              <picture>
                <source srcset="${srcset}">
                <img src="${src}" alt="Фото продукції">
              </picture>
            </div>
            <div class="galary__counter">${counter}</div>
          `;
          wrap.appendChild(item);
        });
      }
      function createAccessoriesItem(response, wrap, visible_count, key){
        response.forEach(({src, srcset, data, counter}, i) => {
          let item = document.createElement('div');
          item.classList.add('accessories__item', 'accessories__item-art');

          if(wrap.classList.contains('accessories__slide-wrapper-art')){
            item.innerHTML = `
            <div class="accessories__img accessories__img-art">
              <picture>
                <source srcset="${srcset}">
                <img src="${src}" alt="Фото продукції" data-fancy="${data}">
              </picture>
            </div>
            <div class="accessories__counter">${counter}</div>
          `;
          } else {
            item.innerHTML = `
            <div class="accessories__img">
              <picture>
                <source srcset="${srcset}">
                <img src="${src}" alt="Фото продукції" data-fancy="${data}">
              </picture>
            </div>
            <div class="accessories__counter">${counter}</div>
          `;
          }
          wrap.appendChild(addLightBox(key, item, i, visible_count));
          refreshFsLightbox();
        });
      }
      function addLightBox(key, item, i, visible){
        const href = item.querySelector('img').getAttribute('data-fancy');
        const a = document.createElement('a');
        if(i > visible) {
          a.classList.add('hide');
        }
        a.setAttribute('data-fslightbox', `${key}`);
        a.setAttribute('href', `${href}`);
        a.appendChild(item);
        return a;
      }
      function switchSection(res, wrap, section, range) {
        switch (section) {
          case 'single':
            createItem(res.single, wrap, range);
            createMoreBtn(msg, range, wrap, res.single.length);
            break;
          case 'double':
            createItem(res.double, wrap, range);
            createMoreBtn(msg, range, wrap, res.double.length);
            break;
          case 'triple':
            createItem(res.triple, wrap, range);
            createMoreBtn(msg, range, wrap, res.triple.length);
            break;
          case 'child':
            createItem(res.child, wrap, range);
            createMoreBtn(msg, range, wrap, res.child.length);
            break;
          case 'art':
            createAccessoriesItem(res.art, wrap, range, 'art');
            createMoreBtn(msg, range, wrap, res.art.length);
            break;
          case 'vase':
            createAccessoriesItem(res.vase, wrap, range, 'vase');
            createMoreBtn(msg, range, wrap, res.vase.length);
            break;
          case 'bronse':
            createAccessoriesItem(res.bronse, wrap, range, 'bronse');
            createMoreBtn(msg, range, wrap, res.bronse.length);
            break;
          case 'inscriptions':
            createAccessoriesItem(res.inscriptions, wrap, range, 'inscription');
            createMoreBtn(msg, range, wrap, res.inscriptions.length);
            break;
          case 'granit':
            createAccessoriesItem(res.granit, wrap, range, 'granit');
            createMoreBtn(msg, range, wrap, res.granit.length);
            break;
          default:
            break;
        }
      }
      function createMoreBtn(msg, range, wrap, length){
        if(length >= range){
          const btn = document.createElement('div'),
                span = document.createElement('span');
          span.textContent = msg;
          btn.classList.add('button', 'galary__btn');
          btn.appendChild(span);
          wrap.parentNode.appendChild(btn);
        }
      }
    }
};

export default showMore;