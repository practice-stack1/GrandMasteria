
const navigation = (columns) => {
  const wrapper = document.querySelectorAll(columns);
  
  wrapper.forEach(item => {
    item.addEventListener('click', (e) => {
      setSection(item);
      item.querySelector('a').click();
    });
  });

  function setSection(item){
    let section = item.dataset.nav;
    let page = item.dataset.page;
    localStorage.setItem('page', page);
    if(page === 'galary'){
      localStorage.setItem('galary-tab-section', section);
    } else {
      localStorage.setItem('accessories-tab-section', section);
    }
  }
};

export default navigation;