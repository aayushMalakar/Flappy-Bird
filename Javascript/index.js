const flap = new sound('../../Assets/audio/wing.wav');
const hit = new sound('../../Assets/audio/hit.wav');
const die = new sound('../../Assets/audio/die.wav');
const point = new sound('../../Assets/audio/point.wav');
const swoosh = new sound('../../Assets/audio/swoosh.wav');

class Game {
  constructor() {
    this.runAnimation;
    this.background = new Background();
    this.background.init();
    this.menu = new Menu(this.background);
    this.menu.start();
    this.showMenu = true;
  }

  init = () => {
    this.bird = new Bird(this.background, flap, swoosh);
    this.bird.init();
    this.pipes = [];
    this.pipeCounter = 100;
    this.score = new Score(this.background);
    this.score.init();
    this.score.showScore();
    if (!this.showMenu) {
      // this.background.landscape.removeChild(this.menu.startMenu);
      this.menu.startMenu.remove();
    }

    window.addEventListener('keydown', this.gameEvent);
  };

  gameEvent = event => {
    if (event.keyCode === 70) {
      this.showMenu = false;
      this.resetGame();
      window.removeEventListener('keydown', this.gameEvent);
    }
  };

  resetGame = () => {
    while (this.background.landscape.firstChild) {
      this.background.landscape.removeChild(
        this.background.landscape.lastChild
      );
    }

    this.init();
    this.runAnimation = requestAnimationFrame(this.startGame);
  };

  startGame = () => {
    this.background.move();
    this.bird.fall();

    if (this.pipes.length < 3 && this.pipeCounter % 100 === 0) {
      const pipe = new Pipe(this.background);
      pipe.init();
      this.pipes.push(pipe);
    }

    this.pipeCounter++;

    if (
      collision(
        this.bird.y,
        this.bird.x,
        this.bird.width,
        this.bird.height,
        0,
        0,
        1000,
        1
      ) ||
      collision(
        this.bird.y,
        this.bird.x,
        this.bird.width,
        this.bird.height,
        512,
        0,
        1000,
        1
      )
    ) {
      hit.play();
      die.play();
      this.endGame();
      cancelAnimationFrame(this.runAnimation);
      return;
    }

    if (this.pipes.length > 0) {
      for (let i = 0; i < this.pipes.length; i++) {
        this.pipes[i].move();

        if (
          collision(
            this.bird.y,
            this.bird.x,
            this.bird.width,
            this.bird.height,
            this.pipes[i].pipeTopY,
            this.pipes[i].x,
            this.pipes[i].width,
            this.pipes[i].pipeTopHeight
          ) ||
          collision(
            this.bird.y,
            this.bird.x,
            this.bird.width,
            this.bird.height,
            this.pipes[i].pipeBottomY,
            this.pipes[i].x,
            this.pipes[i].width,
            this.pipes[i].pipeBottomHeight
          )
        ) {
          hit.play();
          die.play();
          this.endGame();
          cancelAnimationFrame(this.runAnimation);
          return;
        }

        if (this.pipes[i].x + this.pipes[i].width === this.bird.x) {
          point.play();
          this.score.increaseScore();
        }
      }
    }

    this.runAnimation = requestAnimationFrame(this.startGame);
  };

  endGame = () => {
    this.bird.remove();
    this.score.updateHighScore();

    const gameOver = setInterval(() => {
      if (this.bird.y <= 512 - this.bird.height) {
        this.bird.die();
      } else {
        this.score.displayScoreBoard();
        this.score.showHighScore();
        clearInterval(gameOver);
        window.addEventListener('keydown', this.gameEvent);
      }
    }, 1000 / 120);
  };
}

const game = new Game();
game.init();
