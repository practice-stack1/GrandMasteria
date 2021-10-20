const tab = (headerSelector, tabSelector, contentSelector = null, secondSelector = null, activeClass, display = 'block', secondDisplay = 'block') => {

  try {
    const header = document.querySelector(headerSelector),
        tab = document.querySelectorAll(tabSelector),
        content = document.querySelectorAll(contentSelector),
        secondConent = document.querySelectorAll(secondSelector);
    if(content[0]){
      header.addEventListener('click', (e) => {

        const target = e.target;
        if(target && (target.classList.contains(tabSelector.replace(/\./, ""))
        || target.parentNode.classList.contains(tabSelector.replace(/\./, "")))){
          tab.forEach( (item, i) => {
            if(target == item || target.parentNode == item){
              hideTabContent();
              showTabContent(i);
            }
          });
        }
      });
      hideTabContent();
      showDefaultTabContent();
      function hideTabContent() {
        content.forEach(item => {
          item.style.display = "none";
          item.classList.remove('animated', 'fadeIn');
        });
        if(secondConent){
          secondConent.forEach(secCont => {
            secCont.style.display = 'none';
            secCont.classList.remove('animated', 'fadeIn');
          });
        }

        if(tab){
          tab.forEach(item => {
            item.classList.remove(activeClass);
          });
        }
      }
      function showDefaultTabContent(){
        const page = localStorage.getItem('page');

        switch (page) {
          case 'galary':
            setItem('galary-tab-section');
            break;
          case 'accessories':
            setItem('accessories-tab-section');
            break;
          case 'default':
            localStorage.setItem('galary-tab-section', 'single');
            localStorage.setItem('accessories-tab-section', 'art');
            setItem('galary-tab-section');
            setItem('accessories-tab-section');
        }

        if(!page){
          localStorage.setItem('galary-tab-section', 'single');
          localStorage.setItem('accessories-tab-section', 'art');
          setItem('galary-tab-section');
          setItem('accessories-tab-section');
        }
      }
      function setItem(key){
        const navigate = localStorage.getItem(key);
        tab.forEach((item, i) => {
          if(navigate === item.dataset.nav){
            hideTabContent();
            showTabContent(i);
          }
        });
      }
      function showTabContent(i = 0) {
        content[i].style.display = display;
        content[i].classList.add('animated', 'fadeIn');
        tab[i].classList.add(activeClass);
        if(secondConent[i]){
          secondConent[i].style.display = secondDisplay;
          secondConent[i].classList.add('animated', 'fadeIn');
        }
      }
    }
  } catch (error) {}
};

export default tab;