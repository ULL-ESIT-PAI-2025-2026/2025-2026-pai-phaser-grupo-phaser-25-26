/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Jose Angel Portillo Garcia
 * @author Alejandro Feo Martin
 * @author Kyliam Gabriel Chinea Salcedo
 * @since Apr 29 2026
 * @desc Demonstrates player input handling and basic platforming movement using Arcade Physics.
 */

import * as Phaser from 'phaser';
import { ColorName } from '../../colors';

/**
 * @classdesc A scene demonstrating how to capture keyboard input to control
 * a dynamic physics body, including horizontal movement and jumping logic.
 */
export default class Physics4 extends Phaser.Scene {
  private playerRectangle!: Phaser.GameObjects.Rectangle;
  private cursorKeys!: Phaser.Types.Input.Keyboard.CursorKeys;

  /**
   * @desc Instantiates the player input demonstration scene with its unique Phaser key.
   */
  constructor() {
    super('Physics4');
  }

  /**
   * @desc Initializes the environment, player, collisions, and keyboard input listening.
   */
  create(): void {
    const groundPlatform: Phaser.GameObjects.Rectangle = this.add.rectangle(400, 550, 800, 50, ColorName.GRAY);
    this.physics.add.existing(groundPlatform, true);

    this.playerRectangle = this.add.rectangle(400, 100, 50, 50, ColorName.LIME);
    this.physics.add.existing(this.playerRectangle);

    this.physics.add.collider(this.playerRectangle, groundPlatform);

    if (this.input.keyboard) {
      this.cursorKeys = this.input.keyboard.createCursorKeys();
    }
  }

  /**
   * @desc Evaluates keyboard inputs every frame to update the player's physical velocities.
   */
  update(): void {
    if (!this.cursorKeys) {
      return;
    }

    const playerPhysicsBody = this.playerRectangle.body as Phaser.Physics.Arcade.Body;

    if (this.cursorKeys.left.isDown) {
      playerPhysicsBody.setVelocityX(-200);
    } else if (this.cursorKeys.right.isDown) {
      playerPhysicsBody.setVelocityX(200);
    } else {
      playerPhysicsBody.setVelocityX(0);
    }

    if (this.cursorKeys.up.isDown && playerPhysicsBody.touching.down) {
      playerPhysicsBody.setVelocityY(-300);
    }
  }
}