import * as PIXI from 'pixi.js';

export default class Level {
  pixi;
  player;
  path;

  constructor() {
    this.pixi = new PIXI.Application({
      height: 300,
      width: 300,
      backgroundColor: 0xf7e03b,
    });
    document.body.appendChild(this.pixi.view);
  }

  start() {
    this.player = new PIXI.Sprite(PIXI.Texture.WHITE);
    this.player.tint = 0x2638c4;
    this.player.width = 10;
    this.player.height = 10;
    this.player.position.x = 150;
    this.player.position.y = 250;
    this.path = new PIXI.Graphics();

    this.pixi.stage.addChild(this.path);
    this.pixi.stage.addChild(this.player);
    console.log(this.player);
  }

  move(x, y) {
    if (x !== undefined && y !== undefined) {
      const lineWidth = this.player.width * 0.8;
      const lineShift = this.player.width / 2;
      const prevX = this.player.x + lineShift;
      const prevY = this.player.y + lineShift;

      this.player.position.set(x, y);
      console.log('moving', this.player, prevX, prevY, x, y);

      this.pixi.render(this.pixi.stage);

      this.path
        .lineStyle(lineWidth, 0xff0000)
        .moveTo(prevX, prevY)
        .lineTo(x + lineShift, y + lineShift);
    }
  }
}
