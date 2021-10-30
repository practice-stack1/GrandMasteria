const tabSlider = (tab__wrapper, tab__slides, arrows__left, arrows__right) => {

  try {
    const wrapper = document.querySelector(tab__wrapper),
        slides = document.querySelectorAll(tab__slides),
        arrL = document.querySelector(arrows__left),
        arrR = document.querySelector(arrows__right);
    let slideIndex = 0;

    activateTabSlider(true);

    try {
      window.addEventListener('resize', () => {
        activateTabSlider(false);
      });
    } catch (error) {
      console.log(error);
    }

    arrL.addEventListener('click', () => {
      plusSlide(-1);
    });
    arrR.addEventListener('click', () => {
      plusSlide(1);
    });

    function plusSlide(n){
      showSlides(slideIndex += n);
    }

    function showSlides(n = 0){
      if(n >= slides.length){
        slideIndex = 0;
      } else if(n < 0){
        slideIndex = slides.length - 1;
      }

      slides.forEach(slide => {
        slide.style.display = 'none';
      });
      slides[slideIndex].style.display = 'block';
      slides[slideIndex].click();
    }


    function activateTabSlider(bool){
        if(document.documentElement.clientWidth <= 900){
          if(bool){
            const page = localStorage.getItem('page');

            switch (page) {
              case 'galary':
                getItem('galary-tab-section');
                break;
              case 'accessories':
                getItem('accessories-tab-section');
                break;

            }
          }
          showSlides(slideIndex);
          wrapper.style.cssText = `
            justify-content: center;
          `;
        } else {
          wrapper.style.cssText = `
            justify-content: space-between;
          `;
          slides.forEach(slide => {
            slide.style.display = 'block';
          });
        }

    }

    function getItem(key){
      let navigate = localStorage.getItem(key);
      console.log(navigate);
      switch(navigate){
        case 'single':
          slideIndex = 0;
          break;
        case 'art':
          slideIndex = 0;
          break;
        case 'double':
          slideIndex = 1;
          break;
        case 'triple':
          slideIndex = 2;
          break;
        case 'accessories':
          slideIndex = 1;
          break;
        case 'granit':
          slideIndex = 2;
          break;
        case 'child':
          slideIndex = 3;
          break;

      }
      console.log(slideIndex);
    }

  } catch (error) {
    console.log(error);
  }
};

export default tabSlider;