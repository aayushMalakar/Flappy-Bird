function collision() {
    for (var i = 0; i < that3.pipeCollection.length; i++) {
      if (
        (that.width + that.leftPosition > that3.pipeCollection[i].topElementX &&
          that3.pipeCollection[i].topElementHeight >= that.gravity &&
          that.width + that.leftPosition <
            that3.pipeCollection[i].topElementX +
              that3.pipeCollection[i].width &&
          that3.pipeCollection[i].topElementHeight >= that.gravity) ||
        (that.leftPosition + that.width >
          that3.pipeCollection[i].bottomElementX &&
          that3.pipeCollection[i].bottomElementY <=
            that.gravity + that.height &&
          that.leftPosition + that.width <
            that3.pipeCollection[i].bottomElementX +
              that3.pipeCollection[i].width &&
          that3.pipeCollection[i].bottomElementY <= that.gravity + that.height)
      ) {
        clearInterval(interval);
      }

      if (
        that3.pipeCollection[i].topElementX + that3.pipeCollection[i].width ==
        that.leftPosition
      ) {
        var stringnumber = that3.score + '';
        console.log(that3.score);

        while (that2.scoreDiv.firstChild) {
          that2.scoreDiv.removeChild(that2.scoreDiv.firstChild);
        }

        for (var j = 0; j < stringnumber.length; j++) {
          var image = document.createElement('img');
          image.src = "sprites/'" + stringnumber[j] + ".png'";
          console.log("'sprites/" + stringnumber[j] + ".png'");
          that2.scoreDiv.appendChild(image);
        }

        that3.score += 1;
      }
    }
  }
};