import isMobile from '../../basic/checkMobile';

const header = (header_burger, header_menu, header__contacts, header__items) => {
  const burger = document.querySelector(header_burger),
      menu = document.querySelector(header_menu),
      tels = document.querySelectorAll(header__contacts),
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

  if(isMobile.any()){
    const phone = "tel:+";
    conetions(tels, phone);
  } else {
    const viber = "viber://chat?number=+";
    conetions(tels, viber);
  }

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

  function conetions(phones, type) {
    phones.forEach(tel => {
     if(tel.dataset.tel === 'true'){
        let number = tel.textContent.replace(/\D/g, '');
        tel.setAttribute('href', `${type}${number}`);
     }
    });
  }
}

export default header;