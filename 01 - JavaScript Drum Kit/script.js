/**
 * 实现任务：按键时添加样式(.playing)、并发出声音
 */

function removeTransition(e) {
  console.log('e.propertyName =', e.propertyName);
  if (e.propertyName !== 'box-shadow') {
    e.target.classList.remove('playing');
  }
}

function playSound(e) {
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  console.log('audio: ', audio); //没有则为null
  console.log('key: ', key); //没有则为null
  if (!audio) return;

  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
}

const keys = Array.from(document.querySelectorAll('.key'));
console.log('keys: ', keys);
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);