const navigation = (columns) => {
  const wrapper = document.querySelectorAll(columns);

  wrapper.forEach(item => {
    item.addEventListener('click', (e) => {
      console.log(e.target);
      item.querySelector('a').click();
    });
  });
};

export default navigation;