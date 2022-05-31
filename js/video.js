
const iframePlayer = document.querySelector('#youtube-video');
const customBtnPlay = document.querySelector('.video__play-btn');
const customPreview = document.querySelector('.video__preview');

customBtnPlay.addEventListener('click', () => {
  iframePlayer.setAttribute('src', iframePlayer.dataset.src);
  iframePlayer.classList.add('youtube-video--show');
  customPreview.style.display = 'none';
  customBtnPlay.style.display = 'none';
})