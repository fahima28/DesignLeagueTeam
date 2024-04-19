//Loader
window.addEventListener('load', () => {
  const loader = document.querySelector('.loader');
  setTimeout(() => {
    loader.setAttribute('style', 'opacity: 0;');
  }, 500);
  setTimeout(() => {
    loader.parentNode.removeChild(loader);
    document.body.style.overflow= 'initial';
  }, 1000);
});

const coinSfx = new Sfx('sfx/Mario Coin.wav');
const pipeSfx = new Sfx('sfx/Mario Pipe.wav');
const powerUpSfx = new Sfx('sfx/Mario Powerup.wav');
const container = document.querySelector('.content');
let ninja;
