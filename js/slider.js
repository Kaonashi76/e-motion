
document.addEventListener('DOMContentLoaded', () => {
  const slidersLength = 3;
  let activeSlider = 0;

  let interval;

  const sliderImg = new ItcSimpleSlider('#slider__img', {
    loop: true,
    autoplay: false,
    interval: 5000,
    swipe: false,
  });

  const sliderContents = new ItcSimpleSlider('#slider__contents', {
    loop: true,
    autoplay: false,
    interval: 5000,
    swipe: false,
  });


  const controls = document.querySelectorAll('.slider__control-btn');

  function animation() {
    interval = setInterval(() => {
      if (activeSlider === slidersLength) {
        activeSlider = 0;
      } else {
        activeSlider++;
      }
      sliderImg._moveTo(activeSlider, true);
      sliderContents._moveTo(activeSlider, true);

      clearClasses();
      controls.forEach(el=>{
        if(el.dataset.index == activeSlider) {
          el.classList.add('btn-active');
        }
      })
    }, 5000);
  }

  animation()

  controls.forEach(el=> {
    el.addEventListener('click', event => {
      const elClick = event.target;
      clearClasses();
      elClick.classList.add('btn-active');
      sliderImg._moveTo(elClick.dataset.index, true);
      sliderContents._moveTo(elClick.dataset.index, true);
      activeSlider = +elClick.dataset.index;
      clearInterval(interval);
      setTimeout(animation,500)
    })
  });

  function clearClasses() {
    controls.forEach(el => {
      el.classList.remove('btn-active');
    })
  }
});
