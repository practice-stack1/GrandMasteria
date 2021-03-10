
const header = (header_burger, header_menu, header__items) => {
  const burger = document.querySelector(header_burger),
      menu = document.querySelector(header_menu),
      items = document.querySelectorAll(header__items);

  burger.addEventListener('click', () => {
    if(burger.classList.contains('active')){
      burger.classList.remove('active');
      menu.classList.remove('active');
      document.body.classList.remove('lock');
    } else {
      burger.classList.add('active');
      menu.classList.add('active');
      document.body.classList.add('lock');
    }
  });



  itemActivity(items);

  function itemActivity(elements) {
    const navigation = window.location.pathname;
    const filename = navigation.replace(/(\\|\/)+/ig, '');
    console.log(filename);
    elements.forEach(element => {
      if(filename === element.dataset.path){
        element.classList.add('active');
      }
    });
  }

}

export default header;