const tab = (headerSelector, tabSelector, contentSelector, activeClass, display = 'block') => {
  const header = document.querySelector(headerSelector),
        tab = document.querySelectorAll(tabSelector),
        content = document.querySelectorAll(contentSelector);

  try {
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
      });

      tab.forEach(item => {
        item.classList.remove(activeClass);
      });
    }
    function showDefaultTabContent(){
      const page = localStorage.getItem('page');
      if(page === 'galary'){
        setItem('galary-tab-section');
      } else {
        setItem('accessories-tab-section');
      }

      localStorage.setItem('galary-tab-section', 'single');
      localStorage.setItem('accessories-tab-section', 'art');
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
      console.log(i);
      content[i].style.display = display;
      content[i].classList.add('animated', 'fadeIn');
      tab[i].classList.add(activeClass);
    }
  } catch (error) {}
};

export default tab;