import * as Phaser from 'phaser';
import { Player } from './player-class';

export class MainScene extends Phaser.Scene {
  private player!: Player;

  constructor() {
    super('MainScene');
  }

  public create(): void {
    this.player = new Player(this);
  }

  public update(): void {
    // Llamamos al movimiento en cada frame
    this.player.updateMovement();
  }
}