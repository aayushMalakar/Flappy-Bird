class Menu {
  constructor(parent) {
    this.parent = parent;
    this.startMenuHeight = 267;
    this.startMenuWidth = 184;
  }

  start = () => {
    this.startMenu = document.createElement('div');
    this.startMenu.style.width = `${this.startMenuWidth}px`;
    this.startMenu.style.height = `${this.startMenuHeight}px`;
    this.startMenu.style.backgroundImage = "url('../Assets/img/message.png')";
    this.startMenu.style.position = 'absolute';
    this.startMenu.style.top = '12%';
    this.startMenu.style.left = '50%';
    this.startMenu.style.transform = 'translatex(-50%)';
    this.parent.landscape.appendChild(this.startMenu);
    // this.parent.landscape.removeChild(this.startMenu);
  };

  gameOver = () => {};
}
