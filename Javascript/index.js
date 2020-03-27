var Run = function() {
  that3 = this;

  this.score = 0;

  this.scoreDisplay = null;

  //stores pipe object
  this.pipeCollection = [];

  // controls the animation in option menu
  this.startMenuFlag = true;

  //
  this.pipeCounter = 0;

  //
  this.startGameflag = false;

  //background control
  this.landscapeControl = 0;
  this.baseControl = 0;

  this.init = function() {
    interval = setInterval(function() {
      //starts background animation
      that3.landscapeControl--;
      that3.baseControl -= 4;
      that2.landscapeBackground.style.backgroundPositionX =
        that3.landscapeControl + 'px';
      that2.baseBackground.style.backgroundPositionX = that3.baseControl + 'px';

      // bird movement and animation
      that.animationControl++;

      if (that.animationControl == 20) {
        that.animate();
      }
      //

      //only runs on option menu
      if (that3.startGameflag == false) {
        if (that3.startMenuFlag == true) {
          that.gravity++;
          that.element.style.top = that.gravity + 'px';

          if (that.gravity == 360) {
            that3.startMenuFlag = false;
          }
        } else {
          that.gravity--;
          that.element.style.top = that.gravity + 'px';

          if (that.gravity == 340) {
            that3.startMenuFlag = true;
          }
        }
      }
      //

      //only runs on start menu
      if (that3.startGameflag == true) {
        collision();

        that.rotation += 1.7;
        that.gravityController++;

        if (that.gravityController == 5) {
          that.move();
        }

        if (
          that3.pipeCounter == 200 ||
          that3.pipeCounter == 400 ||
          that3.pipeCounter == 600
        ) {
          var pipe = new Pipes();

          pipe.topElementHeight = Math.floor(Math.random() * 300) + 100;
          pipe.bottomElementHeight = 512 - pipe.topElementHeight - pipe.gap;
          pipe.bottomElementY = 512 - pipe.bottomElementHeight;
          pipe.init();
          that3.pipeCollection.push(pipe);
        }

        that3.pipeCounter++;

        for (var j = 0; j < that3.pipeCollection.length; j++) {
          that3.pipeCollection[j].topElementX--;
          that3.pipeCollection[j].bottomElementX--;

          if (that3.pipeCollection[j].topElementX + 60 <= 0) {
            that3.pipeCollection[j].topElementX =
              that3.pipeCollection[j].rePosition;
            that3.pipeCollection[j].bottomElementX =
              that3.pipeCollection[j].rePosition;

            that3.pipeCollection[j].topElementHeight =
              Math.floor(Math.random() * 300) + 100;
            that3.pipeCollection[j].bottomElementHeight =
              512 -
              that3.pipeCollection[j].topElementHeight -
              that3.pipeCollection[j].gap;
            that3.pipeCollection[j].bottomElementY =
              512 - that3.pipeCollection[j].bottomElementHeight;

            that3.pipeCollection[j].topElement.style.left =
              that3.pipeCollection[j].topElementX + 'px';
            that3.pipeCollection[j].bottomElement.style.left =
              that3.pipeCollection[j].bottomElementX + 'px';

            that3.pipeCollection[j].topElement.style.height =
              that3.pipeCollection[j].topElementHeight + 'px';
            that3.pipeCollection[j].bottomElement.style.height =
              that3.pipeCollection[j].bottomElementHeight + 'px';
            that3.pipeCollection[j].bottomElement.style.top =
              512 - that3.pipeCollection[j].bottomElementHeight + 'px';
          } else {
            that3.pipeCollection[j].topElement.style.left =
              that3.pipeCollection[j].topElementX + 'px';
            that3.pipeCollection[j].bottomElement.style.left =
              that3.pipeCollection[j].bottomElementX + 'px';
          }
        }
        //
      }
    }, 20);
  };

  

//starts the game
var run = new Run();
run.init();

//Bird control event handling
document.addEventListener('keypress', turn);

function jump(e) {
  if (e.keyCode === 32) {
    createLayout.menu.style.display = 'none';
    that3.startGameflag = true;

    that.rotation = -30;
    that.element.style.transform = 'rotate(' + that.rotation + 'deg)';
    that.gravity = that.gravity - that.antiGravity;
    that.element.style.top = that.gravity + 'px';
    that.velocity = 1;
  }
}
//
