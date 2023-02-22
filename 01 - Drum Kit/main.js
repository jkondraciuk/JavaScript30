const keys = document.querySelectorAll('.keyboard__key');

window.addEventListener('keydown', e => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"`);
  if (!audio) return; // stopping function
  const key = document.querySelector(`.keyboard__key[data-key="${e.keyCode}"]`);
  
  audio.currentTime = 0; // audio can be played with no time-between
  audio.play();

  key.classList.add('playing');
});

keys.forEach(key => {
  key.addEventListener('transitionend', e => {
    if (e.propertyName !== 'transform') return; // skips if it's not a transform
    e.target.classList.remove('playing');
  });
})