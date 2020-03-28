class Score {
  constructor(parent) {
    this.parent = parent;
    this.initialScore = 0;
    this.highScore = localStorage.getItem('score') || 0;
  }

  init = () => {
    this.scoreBoard = document.createElement('div');
    this.scoreBoard.style.position = 'absolute';
    this.scoreBoard.style.top = '7%';
    this.scoreBoard.style.left = '50%';
    this.scoreBoard.style.zIndex = '100';
    this.scoreBoard.style.transform = 'translateX(-50%)';

    this.BestScore = document.createElement('div');
    this.BestScore.style.position = 'absolute';
    this.BestScore.style.display = 'none';
    this.BestScore.style.top = '65%';
    this.BestScore.style.left = '0';
    this.BestScore.style.right = '0';
    this.BestScore.style.marginRight = '10px';
    this.BestScore.style.textAlign = 'right';

    this.score = document.createElement('div');
    this.score.style.display = 'inline-block';
    this.score.style.marginRight = '1px';
    // this.score.style.backgroundImage = `url('${scoreImg[this.initialScore]}')`;
    this.score.style.textAlign = 'center';

    this.scoreBoard.appendChild(this.score);
    this.parent.landscape.appendChild(this.scoreBoard);
    this.scoreBoard.appendChild(this.BestScore);
  };

  showScore = () => {
    let tempScore = this.initialScore + '';

    while (this.score.firstChild) {
      this.score.removeChild(this.score.firstChild);
    }

    for (let count = 0; count < tempScore.length; count++) {
      this.el = document.createElement('div');
      this.el.style.backgroundRepeat = 'no-repeat';
      this.el.style.width = `24px`;
      this.el.style.height = `24px`;
      this.el.style.backgroundSize = `contain`;
      this.el.style.display = 'inline-block';
      this.el.style.backgroundImage = `url('${scoreImg[tempScore[count]]}')`;
      this.el.style.backgroundRepeat = 'no-repeat';
      this.score.appendChild(this.el);
    }
  };

  increaseScore = () => {
    this.initialScore++;

    this.showScore();
  };

  showHighScore = () => {
    let tempHighScore = this.highScore + '';

    while (this.BestScore.firstChild) {
      this.BestScore.removeChild(this.BestScore.firstChild);
    }

    for (let count = 0; count < tempHighScore.length; count++) {
      this.el = document.createElement('div');
      this.el.style.backgroundRepeat = 'no-repeat';
      this.el.style.width = `24px`;
      this.el.style.height = `24px`;
      this.el.style.backgroundSize = `contain`;
      this.el.style.display = 'inline-block';
      this.el.style.backgroundImage = `url('${
        scoreImg[tempHighScore[count]]
      }')`;
      this.BestScore.appendChild(this.el);
    }

    this.BestScore.style.display = 'block';
  };

  displayScoreBoard = () => {
    this.scoreBoard.style.top = '30%';
    this.scoreBoard.style.width = '226px';
    this.scoreBoard.style.height = '115px';
    this.scoreBoard.style.backgroundImage = "url('../../Assets/img/score.png')";
    this.score.style.textAlign = 'right';
    this.score.style.position = 'absolute';
    this.score.style.top = '30%';
    this.score.style.left = '0';
    this.score.style.right = '0';
    this.score.style.marginRight = '10px';
  };

  updateHighScore = () => {
    if (this.initialScore > localStorage.getItem('score')) {
      this.highScore = this.initialScore;
      localStorage.setItem('score', this.initialScore);
    }
  };
}
