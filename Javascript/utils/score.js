class Score {
  constructor() {
    this.initialScore = 0;
  }

  init = () => {
    this.scoreBoard = document.createElement('div');
    this.scoreBoard.style.position = 'absolute';
    this.scoreBoard.style.top = '7%';
    this.scoreBoard.style.left = '50%';
    this.scoreBoard.style.zIndex = '100';
    this.scoreBoard.style.transform = 'translateX(-50%)';
    container.appendChild(this.scoreBoard);
  };

  increaseScore = () => {
    this.initialScore++;
    this.initialScore = this.initialScore + '';

    while (this.scoreBoard.firstChild) {
      this.scoreBoard.removeChild(this.scoreBoard.firstChild);
    }

    for (let count = 0; count < this.initialScore.length; count++) {
      this.score = document.createElement('div');
      this.score.style.display = 'inline-block';
      this.score.style.marginRight = '1px';
      this.score.style.backgroundImage = `url('${
        scoreImg[this.initialScore[count]]
      }')`;
      this.score.style.backgroundRepeat = 'no-repeat';
      this.score.style.width = `24px`;
      this.score.style.height = `36px`;
      this.scoreBoard.appendChild(this.score);
    }
  };
}
