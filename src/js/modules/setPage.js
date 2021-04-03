const setpage = (trig) => {
  const triggers = document.querySelectorAll(trig);
  triggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      let page = trigger.dataset.page;
      localStorage.setItem('page', page);
    });
  });
};

export default setpage;