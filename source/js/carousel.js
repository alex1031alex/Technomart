var slides = document.querySelectorAll('.carousel__item');
var prev = document.querySelector('.carousel__control--prev');
var next = document.querySelector('.carousel__control--next');
var indicators = document.querySelectorAll('.carousel__indicator');

prev.addEventListener('click', function(evt){
  evt.preventDefault();
  var active = document.querySelector('.carousel__item--active');
  if (active !== slides[0]) {
    if (next.classList.contains('carousel__control--disable')) {
      next.classList.remove('carousel__control--disable');
    }
    for (i = 1; i < slides.length; i++) {
      if (active == slides[i]) {
        active.classList.remove('carousel__item--active');
        slides[i-1].classList.add('carousel__item--active');
        indicators[i].classList.remove('carousel__indicator--active');
        indicators[i-1].classList.add('carousel__indicator--active');
        if (i == 1) {
          prev.classList.add('carousel__control--disable');
        }
        break;
      }
    }
  }
});

next.addEventListener('click', function(evt){
  evt.preventDefault();
  var active = document.querySelector('.carousel__item--active');
  if (active !== slides[slides.length-1]) {
    if (prev.classList.contains('carousel__control--disable')) {
      prev.classList.remove('carousel__control--disable');
    }
    for (i = 0; i < slides.length - 1; i++) {
      if (active == slides[i]) {
        active.classList.remove('carousel__item--active');
        slides[i+1].classList.add('carousel__item--active');
        indicators[i].classList.remove('carousel__indicator--active');
        indicators[i+1].classList.add('carousel__indicator--active');
      }
      if (i == slides.length - 2) {
        next.classList.add('carousel__control--disable');
      }
      break;
    }
  }
});

// Нужно прописать добавление/удаление disable при клике на индикаторы
Array.prototype.slice.call(indicators).forEach(function(indicator, i){
  indicator.addEventListener('click', function(){
    if (!indicator.classList.contains('carousel__indicator--active')) {
      var activeIndicator = document.querySelector('.carousel__indicator--active');
      document.getElementById(activeIndicator.getAttribute('aria-controls')).classList.remove('carousel__item--active');
      activeIndicator.classList.remove('carousel__indicator--active');
      document.getElementById(indicator.getAttribute('aria-controls')).classList.add('carousel__item--active');
      indicator.classList.add('carousel__indicator--active');

      if (i == 0) {
        prev.classList.add('carousel__control--disable');
      } else if (prev.classList.contains('carousel__control--disable')) {
        prev.classList.remove('carousel__control--disable');
      };

      if (i == indicators.length-1) {
        next.classList.add('carousel__control--disable');
      } else if (next.classList.contains('carousel__control--disable')) {
        next.classList.remove('carousel__control--disable');
      };
    };
  });
});
