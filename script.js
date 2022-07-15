window.addEventListener("load", () => {
  // canvas setup
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");
  canvas.width = 1500;
  canvas.height = 500;

  class InputHandler {
    constructor(game) {
      this.game = game;
      window.addEventListener("keydown", (e) => {
        console.log(e.key)
      })
    }
  }

  class Projectile {}

  class Particle {}

  class Player {
    constructor(game) {
      this.game = game;
      this.width = 120;
      this.height = 190;
      this.x = 20;
      this.y = 100;
      this.speedY = 0;
    }
    update() {
      this.y += this.speedY;
    }
    draw(context) {
      context.fillRect(this.x, this.y, this.width, this.height);
    }
  }

  class Enemey {}

  class Layer {}

  class Background {}

  class Ui {}

  class Game {
    constructor(canvasWidth, canvasHeight) {
      this.width = canvasWidth;
      this.heigth = canvasHeight;
      this.player = new Player(this);
      this.input = new InputHandler(this);
    }
    update() {
      this.player.update();
    }
    draw(context) {
      this.player.draw(context);
    }
  }

  const game = new Game(canvas.width, canvas.heigth);

  // animation loop
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    game.update();
    game.draw(ctx);
    requestAnimationFrame(animate);
  }

  animate();
});
