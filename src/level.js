import * as PIXI from 'pixi.js';

export default class Level {
  pixi;
  player;

  constructor() {
    this.pixi = new PIXI.Application({ height: 300, width: 300, backgroundColor: 0xF7E03B });
    document.body.appendChild(this.pixi.view);
  }

  start() {
    this.player = new PIXI.Sprite(PIXI.Texture.WHITE);
    this.player.tint = 0x2638C4;
    this.player.width = 10;
    this.player.height = 10;

    this.pixi.stage.addChild(this.player);
    console.log(this.player);
  }

  move(x, y) {
    if (x !== undefined && y !== undefined) {
      this.player.position.set(x, y);
      console.log('moving', this.player);

      this.pixi.render(this.pixi.stage);
    }
  }
}