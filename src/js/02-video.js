const throttle = require('lodash.throttle');
import Player from '@vimeo/player';
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on(
  'timeupdate',
  throttle(function (data) {
    const videoCurrentTime = data.seconds;
    localStorage.setItem('videoplayer-current-time', videoCurrentTime);
  }, 1000)
);
const localCurrentTime = localStorage.getItem('videoplayer-current-time');
player
  .setCurrentTime(JSON.parse(localStorage.getItem(localCurrentTime)))
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
    }
  });
