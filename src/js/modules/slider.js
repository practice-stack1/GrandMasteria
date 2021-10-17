const tabSlider = (tab__wrapper, tab__slides, arrows__left, arrows__right) => {

  try {
    const wrapper = document.querySelector(tab__wrapper),
        slides = document.querySelectorAll(tab__slides),
        arrL = document.querySelector(arrows__left),
        arrR = document.querySelector(arrows__right);
    let slideIndex = 0;

    activateTabSlider();
    try {
      window.addEventListener('resize', () => {
        if(document.body.clientWidth <= 900){
          activateTabSlider();
        } else {
          wrapper.style.cssText = `
            justify-content: space-between;
          `;
          slides.forEach(slide => {
            slide.style.display = 'block';
          });
        }
      });
    } catch (error) {
      console.log(error);
    }


    arrL.addEventListener('click', () => {
      if(document.body.clientWidth <= 768 && document.body.clientWidth > 490) {
        plusSlide(-2);
      } else {
        plusSlide(-1);
      }
    });
    arrR.addEventListener('click', () => {
      if(document.body.clientWidth <= 768 && document.body.clientWidth > 490) {
        plusSlide(2);
      } else {
        plusSlide(1);
      }
    });

    function plusSlide(n){
      showSlides(slideIndex += n);
    }

    function showSlides(n = 1){
      if(document.body.clientWidth <= 900 && document.body.clientWidth > 768){
        if(n >= slides.length - 1){
          slideIndex = 1;
        } else if(n <= 0 || n > 1){
          slideIndex = slides.length;
        }
        slides.forEach(slide => {
          slide.style.display = 'block';
        });
        slides[slideIndex - 1].style.display = 'none';
      }
      if(document.body.clientWidth <= 768 && document.body.clientWidth > 490) {
        if(n > slides.length){
          slideIndex = 2;
        } else if(n < 2){
          slideIndex = slides.length;
        }
        slides.forEach(slide => {
          slide.style.display = 'block';
        });
        slides[slideIndex - 1].style.display = 'none';
        slides[slideIndex - 2].style.display = 'none';
      }
      if(document.body.clientWidth <= 490){
        if(n >= slides.length + 1){
          slideIndex = 1;
        } else if(n <= 0){
          slideIndex = slides.length;
        }
        slides.forEach(slide => {
          slide.style.display = 'none';
        });
        slides[slideIndex - 1].style.display = 'block';
        slides[slideIndex - 1].click();
      }


    }


    function activateTabSlider(){
        if(document.body.clientWidth <= 900){
          if(document.body.clientWidth < 490){
            slideIndex = 1;
          } else {
            slideIndex = 4;
          }
          showSlides();
          wrapper.style.cssText = `
            justify-content: space-around;
          `;
        }
    }
  } catch (error) {}
};

export default tabSlider;