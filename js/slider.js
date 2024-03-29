
document.addEventListener('DOMContentLoaded', () => {

  const regax =  /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i;
  const slidersLength = 4;
  let activeSlider = 0;
  let active = false;
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
    active = true;
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
    }, 7000);
  }

document.addEventListener('scroll', () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if(scrollTop>= 1400 && active === false) {
    animation();
  }
})

if (regax.test(navigator.userAgent)) {

  let x;

  document.querySelector('#slider__img').addEventListener('touchstart', e => x = e.changedTouches[0].clientX);
  document.querySelector('#slider__contents').addEventListener('touchstart', e => x = e.changedTouches[0].clientX);

  document.querySelector('#slider__img').addEventListener('touchend', e => {
   if(e.changedTouches[0].clientX - x < -20 ) {
    clearInterval(interval);
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
    animation();
   }

   if(e.changedTouches[0].clientX - x > 20 ) {
    clearInterval(interval);
    if (activeSlider === 0) {
      activeSlider = slidersLength;
    } else {
      activeSlider--;
    }
    sliderImg._moveTo(activeSlider, true);
    sliderContents._moveTo(activeSlider, true);

    clearClasses();
    controls.forEach(el=>{
      if(el.dataset.index == activeSlider) {
        el.classList.add('btn-active');
      }
    })
    animation();
   }
  });

  document.querySelector('#slider__contents').addEventListener('touchend', e => {
    if(e.changedTouches[0].clientX - x < -20 ) {
     clearInterval(interval);
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
     animation();
    }

    if(e.changedTouches[0].clientX - x > 20 ) {
     clearInterval(interval);
     if (activeSlider === 0) {
       activeSlider = slidersLength;
     } else {
       activeSlider--;
     }
     sliderImg._moveTo(activeSlider, true);
     sliderContents._moveTo(activeSlider, true);

     clearClasses();
     controls.forEach(el=>{
       if(el.dataset.index == activeSlider) {
         el.classList.add('btn-active');
       }
     })
     animation();
    }
   });
}

  controls.forEach(el=> {
    el.addEventListener('click', event => {
      clearInterval(interval);
      const elClick = event.target;
      clearClasses();
      elClick.classList.add('btn-active');
      sliderImg._moveTo(elClick.dataset.index, true);
      sliderContents._moveTo(elClick.dataset.index, true);
      activeSlider = +elClick.dataset.index;
      animation();
    })
  });

  function clearClasses() {
    controls.forEach(el => {
      el.classList.remove('btn-active');
    })
  }
// видео
const iframePlayer = document.querySelector('#youtube-video');
const customBtnPlay = document.querySelector('.video__play-btn');
const customPreview = document.querySelector('.video__preview');

customBtnPlay.addEventListener('click', () => {
  iframePlayer.setAttribute('src', iframePlayer.dataset.src);
  iframePlayer.classList.add('youtube-video--show');
  customPreview.style.display = 'none';
  customBtnPlay.style.display = 'none';
})
  ///main
  const screenWidth = window.screen.width;

if (screenWidth <= 520) {
  const body = document.querySelector('body');
  const srcipt = document.createElement('script');
  srcipt.src = '//code-ya.jivosite.com/widget/IFj9yA1mWA';
  srcipt.setAttribute('async', true);
  body.appendChild(srcipt);
}

const hamburgerMenu = document.querySelector('#menu__toggle');

hamburgerMenu.addEventListener('change', (e)=> {
  e.preventDefault();
  hamburgerMenu.setAttribute('checked', !hamburgerMenu.checked);
});

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    hamburgerMenu.checked = false;
    const blockID = anchor.getAttribute('href').substr(1)
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}
});