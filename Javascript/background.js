const Background = function() {
  this.canvas;
  this.width = 288;
  this.landscape;
  this.landscapeHeight = 512;
  this.landscapePosition = 0;
  this.landscapeSpeed = 0.5;
  this.floor;
  this.floorHeight = 112;
  this.floorPosition = 0;
  this.floorSpeed = 2;

  this.init = () => {
    this.canvas = document.createElement('div');
    this.canvas.style.position = 'relative';

    this.landscape = document.createElement('div');
    this.landscape.style.position = 'relative';
    this.landscape.style.width = this.width + 'px';
    this.landscape.style.height = this.landscapeHeight + 'px';
    this.landscape.style.background =
      "url('../Assets/img/background-day.png') repeat-x";
    this.canvas.appendChild(this.landscape);

    this.floor = document.createElement('div');
    this.floor.style.width = this.width + 'px';
    this.floor.style.height = this.floorHeight + 'px';
    this.floor.style.background = "url('../Assets/img/base.png') repeat-x";
    this.canvas.appendChild(this.floor);

    container.appendChild(this.canvas);
  };

  this.move = () => {
    this.landscapePosition -= this.landscapeSpeed;
    this.floorPosition -= this.floorSpeed;

    this.landscape.style.backgroundPositionX = `${this.landscapePosition}px`;
    this.floor.style.backgroundPositionX = `${this.floorPosition}px`;
  };
};
