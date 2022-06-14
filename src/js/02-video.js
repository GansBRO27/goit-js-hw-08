const throttle = require('lodash.throttle');
import Player from '@vimeo/player';
const options = {};
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe, options);
try {
  const localCurrentTime = localStorage.getItem('videoplayer-current-time');
  const vidCurrentTime = JSON.parse(localCurrentTime);
  player.setCurrentTime(vidCurrentTime);
} catch (error) {
  console.log(error.name); // "SyntaxError"
  console.log(error.message); // Unexpected token W in JSON at position 0
}

player.on(
  'timeupdate',
  throttle(function (data) {
    const videoCurrentTime = data.seconds;
    localStorage.setItem('videoplayer-current-time', videoCurrentTime);
  }, 1000)
);
// player.on(
//   'play',
//   _.throttle(() => {}, 1000)
// );
// player.on(
//   'timeupdate',
//   _.throttle(data => {
//     const videoCurrentTime = data.seconds;
//     localStorage.setItem('videoplayer-current-time', videoCurrentTime);
//   }, 1000)
// )
