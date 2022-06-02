const screenWidth = window.screen.width;

if (screenWidth <= 520) {
  const body = document.querySelector('body');
  const srcipt = document.createElement('script');
  srcipt.src = '//code-ya.jivosite.com/widget/IFj9yA1mWA';
  srcipt.setAttribute('async', true);
  body.appendChild(srcipt);
}