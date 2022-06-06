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