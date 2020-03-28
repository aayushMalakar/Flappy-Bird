/*
    ASCII values of the responding keys
*/
const KEY_SPACE = 32;

/*
   Main container global properties
*/

CONTAINER_HEIGHT = 512;
CONTAINER_WIDTH = 288;

const container = document.querySelector('.game');
container.style.position = 'relative';
container.style.height = 624 + 'px';
container.style.width = 288 + 'px';
container.style.margin = '0px auto';
container.style.overflow = 'hidden';
// container.style.backgroundColor = 'red';

/**
 * image array for score
 */

const scoreImg = [
  '../../Assets/img/0.png',
  '../../Assets/img/1.png',
  '../../Assets/img/2.png',
  '../../Assets/img/3.png',
  '../../Assets/img/4.png',
  '../../Assets/img/5.png',
  '../../Assets/img/6.png',
  '../../Assets/img/7.png',
  '../../Assets/img/8.png',
  '../../Assets/img/9.png'
];
