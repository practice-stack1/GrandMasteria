const setpage = (trig) => {
  const triggers = document.querySelectorAll(trig);
  triggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      let page = trigger.dataset.page;
      localStorage.setItem('page', page);
    });
  });
};

export default setpage;