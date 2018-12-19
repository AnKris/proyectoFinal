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
  //// Start Scroll
  let navbar = document.querySelector('#navbar')
  let prevScrollpos = window.pageYOffset;

  window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      navbar.style.top = "0";
    } else {
      navbar.style.top = "-75px";
    }
    console.log(currentScrollPos)
    if (currentScrollPos > '150'){
      navbar.classList.add('header_background')
    } else
      navbar.classList.remove('header_background')
  prevScrollpos = currentScrollPos;
}
  //// End Scroll
  //// End Home
});