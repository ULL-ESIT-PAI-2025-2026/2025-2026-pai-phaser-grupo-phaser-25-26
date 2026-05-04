/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Jose Angel Portillo Garcia
 * @author Alejandro Feo Martin
 * @author Kyliam Gabriel Chinea Salcedo
 * @since May 04 2026
 * @desc Game scene managing sprite animation and keyboard input.
 */

import * as Phaser from 'phaser';

/**
 * @classdesc Game scene managing sprite animation and keyboard input.
 */
export default class GameScene extends Phaser.Scene {
  private player!: Phaser.GameObjects.Sprite;
  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;

  constructor() {
    super('GameScene');
  }

  preload(): void {
    this.load.image('playerStrip', '../../assets/img/player.png');
  }

  create(): void {
    const baseTexture = this.textures.get('playerStrip');

    if (!baseTexture) {
      console.error('No se pudo cargar la imagen playerStrip');
      return;
    }

    const texture = this.textures.addImage('playerKey', baseTexture.getSourceImage() as HTMLImageElement);

    if (texture) {
      const frameWidth = 33;
      const frameHeight = 40;

      for (let i = 0; i < 10; i++) {
        texture.add(i, 0, i * frameWidth, 0, frameWidth, frameHeight);
      }
    }

    this.player = this.add.sprite(400, 300, 'playerKey', 0).setScale(2);

    this.anims.create({
      key: 'run',
      frames: this.anims.generateFrameNumbers('playerKey', { start: 0, end: 10 }),
      frameRate: 12,
      repeat: -1
    });

    if (this.input.keyboard) {
      this.cursors = this.input.keyboard.createCursorKeys();
    }
  }

  /**
   * @desc Updates player position and animation based on keyboard input.
   */
  update(): void {
    if (!this.cursors || !this.player) return;

    const speed = 4;
    let isMoving = false;

    if (this.cursors.left.isDown) {
      this.player.x -= speed;
      this.player.flipX = true;
      isMoving = true;
    } else if (this.cursors.right.isDown) {
      this.player.x += speed;
      this.player.flipX = false;
      isMoving = true;
    }

    if (this.cursors.up.isDown) {
      this.player.y -= speed;
      isMoving = true;
    } else if (this.cursors.down.isDown) {
      this.player.y += speed;
      isMoving = true;
    }

    if (isMoving) {
      this.player.play('run', true);
    } else {
      this.player.stop();
      this.player.setFrame(0);
    }
  }
}
