const Background = function() {
  this.landscapePosition = 0;
  this.floorPosition = 0;
  this.canvas;
  this.floor;
  this.landscape;

  this.init = () => {
    this.canvas = document.createElement('div');
    this.canvas.style.width = 500 + 'px';
    this.canvas.style.height = 500 + 'px';
    this.canvas.style.position = 'relative';

    this.landscape = document.createElement('div');
    this.landscape.style.width = 288 + 'px';
    this.landscape.style.height = 512 + 'px';
    this.landscape.style.background =
      "url('../Assets/img/background-day.png') repeat-x";
    this.canvas.appendChild(this.landscape);
    this.landscape.style.position = 'relative';

    this.floor = document.createElement('div');
    this.floor.style.width = 288 + 'px';
    this.floor.style.height = 112 + 'px';
    this.floor.style.background = "url('../Assets/img/base.png') repeat-x";
    this.canvas.appendChild(this.floor);

    container.appendChild(this.canvas);
  };

  this.move = () => {
    this.landscapePosition -= 0.5;
    this.floorPosition -= 2;

    this.landscape.style.backgroundPositionX = `${this.landscapePosition}px`;
    this.floor.style.backgroundPositionX = `${this.floorPosition}px`;
  };
};

const background = new Background();

background.init();

setInterval(() => {
  background.move();
}, 1000 / 60);
