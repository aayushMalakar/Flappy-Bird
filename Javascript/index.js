const flap = new sound('../Assets/audio/wing.wav');
const hit = new sound('../Assets/audio/hit.wav');
const die = new sound('../Assets/audio/die.wav');
const point = new sound('../Assets/audio/point.wav');
const swoosh = new sound('../Assets/audio/swoosh.wav');

const score = new Score();
score.init();

const bird = new Bird(flap, swoosh);
bird.init();

const pipes = [];
let pipeCounter = 100;

function endGame() {
  const endGame = setInterval(() => {
    if (bird.y <= 512 - bird.height) {
      bird.die();
    } else {
      clearInterval(endGame);
    }
  }, 1000 / 120);
}

function startGame() {
  bird.fall();

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

      if (
        collision(
          bird.y,
          bird.x,
          bird.width,
          bird.height,
          pipes[i].pipeTopY,
          pipes[i].x,
          pipes[i].width,
          pipes[i].pipeTopHeight
        )
      ) {
        hit.play();
        die.play();
        endGame();
        cancelAnimationFrame(game);
      }

      if (
        collision(
          bird.y,
          bird.x,
          bird.width,
          bird.height,
          pipes[i].pipeBottomY,
          pipes[i].x,
          pipes[i].width,
          pipes[i].pipeBottomHeight
        )
      ) {
        hit.play();
        die.play();

        endGame();
        cancelAnimationFrame(game);
      }

      if (pipes[i].x + pipes[i].width === bird.x) {
        point.play();
        score.increaseScore();
      }
    }
  }

  // collision(bird.y, bird.x, bird.width, bird.height, 0, 0, 100000, 1);

  const game = requestAnimationFrame(startGame);
}

const game = requestAnimationFrame(startGame);
