import * as PIXI from 'pixi.js';

export default class Level {
  pixi;

  constructor() {
    this.pixi = new PIXI.Application({ height: 300, width: 300, backgroundColor: 0xF7E03B });
    document.body.appendChild(this.pixi.view);
  }

  start() {
    let template = new PIXI.Graphics();
    template.beginFill(0x2638C4);
    template.drawCircle(75, 250, 5);

    this.pixi.stage.addChild(template);
  }
}