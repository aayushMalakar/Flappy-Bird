class Bird {
  constructor(parent, flapSound, swooshSound) {
    this.parent = parent;
    this.flapSound = flapSound;
    this.swooshSound = swooshSound;
    this.bird;
    this.width = 34;
    this.height = 24;
    this.x = 30;
    this.y = this.parent.landscapeHeight / 2 - this.height;
    this.dy = 0;
    this.gravity = 0.35;
    this.flap = -6;
    this.angle = 0;
    this.maxRotatedAngle = 90;
  }

  init = () => {
    this.bird = document.createElement('div');
    this.bird.style.width = this.width + 'px';
    this.bird.style.height = this.height + 'px';
    this.bird.style.position = 'absolute';
    this.bird.style.left = this.x + 'px';
    this.bird.style.top = this.y + 'px';
    this.bird.style.zIndex = '1000';
    this.bird.style.backgroundImage =
      "url('../Assets/img/bluebird-upflap.png')";
    this.parent.landscape.appendChild(this.bird);

    document.addEventListener('keypress', this.fly);
  };

  fall = () => {
    this.dy += this.gravity;
    this.y += this.dy;
    this.bird.style.top = this.y + 'px';

    if (this.angle >= this.maxRotatedAngle) {
      this.angle = this.maxRotatedAngle;
    }

    this.bird.style.transform = `rotate(${this.angle}deg)`;
    this.angle += 2;

    if (this.dy > 9) {
      this.swooshSound.play();
    }
  };

  fly = event => {
    if (event.keyCode === KEY_SPACE) {
      this.flapSound.play();
      this.dy = this.flap;
      this.angle = -35;
      this.bird.style.transform = `rotate(${this.angle}deg)`;
    }
  };

  die = () => {
    this.y += 4;
    this.bird.style.transform = `rotate(90deg)`;
    this.bird.style.top = this.y + 'px';
  };

  remove = () => {
    document.removeEventListener('keypress', this.fly);
    // this.flapSound.remove();
  };
}

// document.addEventListener('keypress', event => {
//   window.requestAnimationFrame(startGame);
// });
