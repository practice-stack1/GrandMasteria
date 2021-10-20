import isMobile from '../basic/checkMobile';

const conection = (contacts) => {
  const tels = document.querySelectorAll(contacts);
  if(isMobile.any()){
    const phone = "tel:+";
    conetions(tels, phone);
  } else {
    const viber = "viber://chat?number=+";
    conetions(tels, viber);
  }

  function conetions(phones, type) {
    phones.forEach(tel => {
     if(tel.dataset.tel === 'true'){
        let number = tel.textContent.replace(/\D/g, '');
        tel.setAttribute('href', `${type}${number}`);
     }
    });
  }

};

export default conection;