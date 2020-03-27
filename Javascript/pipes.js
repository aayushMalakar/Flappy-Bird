class Pipe {
  constructor() {
    this.width = 52;
    this.maxHeight = 320;
    this.minHeight = 60;
    this.x = 388;
    this.y = 0;
    this.pipesGap = 120;
    this.pipeHorizontalGap = 66;
    this.velocity = 2;
  }

  init = () => {
    this.generatepipesHeight();

    this.pipeTop = document.createElement('div');
    this.pipeTop.style.width = `${this.width}px`;
    this.pipeTop.style.height = `${this.pipeTopHeight}px`;
    this.pipeTop.style.position = 'absolute';
    this.pipeTop.style.left = this.x + 'px';
    this.pipeTop.style.top = this.y + 'px';
    this.pipeTop.style.backgroundImage = "url('../Assets/img/pipe-green.png')";
    this.pipeTop.style.transform = 'rotate(-180deg)';
    background.landscape.appendChild(this.pipeTop);

    this.pipeBottom = document.createElement('div');
    this.pipeBottom.style.width = `${this.width}px`;
    this.pipeBottom.style.height = `${this.pipeBottomHeight}px`;
    this.pipeBottom.style.position = 'absolute';
    this.pipeBottom.style.left = this.x + 'px';
    this.pipeBottom.style.bottom = this.y + 'px';
    this.pipeBottom.style.backgroundImage =
      "url('../Assets/img/pipe-green.png')";
    background.landscape.appendChild(this.pipeBottom);
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
    this.pipeBottomHeight = 512 - this.pipeTopHeight - this.pipesGap;

    // console.log('Top pipe height>>>', this.pipeTopHeight);
    // console.log('Bottom pipe height>>>', this.pipeBottomHeight);
  };

  checkPipesPosition = () => {
    if (this.x < -200) {
      this.x = 388;
      this.generatepipesHeight();
      this.pipeTop.style.height = `${this.pipeTopHeight}px`;
      this.pipeBottom.style.height = `${this.pipeBottomHeight}px`;
    }
  };
}

const pipes = [];
let pipeCounter = 100;

const startGame = () => {
  if (pipes.length < 3 && pipeCounter % 100 === 0) {
    const pipe = new Pipe();
    pipe.init();
    pipes.push(pipe);
  }

  pipeCounter++;

  //   console.log("pipes array length >>>",pipes.length);

  if (pipes.length > 0) {
    for (let i = 0; i < pipes.length; i++) {
      pipes[i].move();
    }
  }

  window.requestAnimationFrame(startGame);
};

startGame();
