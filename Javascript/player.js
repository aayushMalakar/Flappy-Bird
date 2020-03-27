class Bird {
  constructor() {
    this.bird;
    this.width = 34;
    this.height = 24;
    this.x = 0;
    this.y = 50;
    this.dy = 0;
    this.gravity = 0.35 ;
    this.flap = -6;
    this.angle = 0;

    this.count = 60;
  }

  init = () => {
    this.bird = document.createElement('div');
    this.bird.style.width = this.width + 'px';
    this.bird.style.height = this.height + 'px';
    this.bird.style.position = 'absolute';
    this.bird.style.left = this.x + 'px';
    this.bird.style.top = this.y + 'px';
    this.bird.style.backgroundImage =
      "url('../Assets/img/bluebird-upflap.png')";
    container.appendChild(this.bird);

    document.addEventListener('keypress', this.fly);
  };

  fall = () => {
    this.dy += this.gravity;
    this.y += this.dy;
    this.bird.style.top = this.y + 'px';

    if (this.angle >= 90) {
      this.angle = 90;
    }

    this.bird.style.transform = `rotate(${this.angle}deg)`;
    this.angle += 2;
  };

  fly = event => {
    if (event.keyCode === KEY_SPACE) {
      this.dy = this.flap;
      this.angle = -35;
      this.bird.style.transform = `rotate(${this.angle}deg)`;
      // this.bird.style.transform = 'rotate(0deg)';
      // document.removeEventListener('keypress', this.fly);
    }
  };
}

const bird = new Bird();
bird.init();

function startGame() {
  bird.fall();

  // if (bird.count === 0) {
  //   bird.count = 60;
  // } else {
  //   bird.count -= 1;
  // }
  window.requestAnimationFrame(startGame);
}

window.requestAnimationFrame(startGame);

// document.addEventListener('keypress', event => {
//   window.requestAnimationFrame(startGame);
// });
