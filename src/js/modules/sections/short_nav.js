import {postData} from '../../services/requests';
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
    localStorage.setItem('galary-tab-section', section);
  }
};

export default navigation;