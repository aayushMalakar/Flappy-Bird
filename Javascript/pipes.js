class Pipe {
  constructor(parent) {
    this.parent = parent;
    this.width = 52;
    this.maxHeight = 320;
    this.minHeight = 60;
    this.x = 388;
    this.pipeTopY = 0;
    this.pipeBottomY = 0;
    this.pipesGap = 120;
    this.velocity = 2;
  }

  init = () => {
    this.generatepipesHeight();

    this.pipeTop = document.createElement('div');
    this.pipeTop.style.width = `${this.width}px`;
    this.pipeTop.style.height = `${this.pipeTopHeight}px`;
    this.pipeTop.style.position = 'absolute';
    this.pipeTop.style.left = this.x + 'px';
    this.pipeTop.style.top = this.pipeTopY + 'px';
    this.pipeTop.style.transform = 'rotate(-180deg)';
    this.pipeTop.style.backgroundImage = "url('../Assets/img/pipe-green.png')";
    this.parent.landscape.appendChild(this.pipeTop);

    this.pipeBottom = document.createElement('div');
    this.pipeBottom.style.width = `${this.width}px`;
    this.pipeBottom.style.height = `${this.pipeBottomHeight}px`;
    this.pipeBottom.style.position = 'absolute';
    this.pipeBottom.style.left = this.x + 'px';
    this.pipeBottomY = this.parent.landscapeHeight - this.pipeBottomHeight;
    this.pipeBottom.style.top = `${this.pipeBottomY}px`;
    this.pipeBottom.style.backgroundImage =
      "url('../Assets/img/pipe-green.png')";
    this.parent.landscape.appendChild(this.pipeBottom);
  };

  move = () => {
    this.x += -this.velocity;
    this.pipeTop.style.left = this.x + 'px';
    this.pipeBottom.style.left = this.x + 'px';
    this.checkPipesPosition();
  };

  generatepipesHeight = () => {
    this.pipeTopHeight =
      Math.floor(Math.random() * (this.maxHeight - this.minHeight + 1)) +
      this.minHeight;
    this.pipeBottomHeight =
      this.parent.landscapeHeight - this.pipeTopHeight - this.pipesGap;

    // console.log('Top pipe height>>>', this.pipeTopHeight);
    // console.log('Bottom pipe height>>>', this.pipeBottomHeight);
  };

  checkPipesPosition = () => {
    if (this.x < -220) {
      this.x = 388;
      this.generatepipesHeight();
      this.pipeTop.style.height = `${this.pipeTopHeight}px`;
      this.pipeBottom.style.height = `${this.pipeBottomHeight}px`;
      this.pipeBottomY = this.parent.landscapeHeight - this.pipeBottomHeight;
      this.pipeBottom.style.top = `${this.pipeBottomY}px`;
    }
  };
}
