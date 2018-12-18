document.addEventListener('DOMContentLoaded', function () {
  //// Start Home
  //// Start Slider
  // Variables
  let miCarrousel = document.querySelector('#carrousel');
  let sliderImg = ['img/slider1.jpg', 'img/slider2.jpg', 'img/slider3.jpg']
  let numSlider = 0;
  // Functions
  function slider() {
    setInterval(function () {
      numSlider ++;
      if(numSlider == 3) {
        numSlider = 0;
      };
      miCarrousel.style.backgroundImage = `url(${sliderImg[numSlider]})`;
    },4500)
  }
  // Events
  slider();
  //// End Slider
  //// End Home
});