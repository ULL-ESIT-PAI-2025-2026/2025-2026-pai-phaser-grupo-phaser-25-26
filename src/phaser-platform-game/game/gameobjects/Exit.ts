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
 * @desc Represents the level exit goal that the player must reach to complete the level.
 */

import * as Phaser from 'phaser';
import { ColorName } from '../../../colors';

/**
 * @classdesc A static exit sprite marking the goal position to complete a level.
 * When the player overlaps this sprite, the level is marked as complete.
 */
export default class Exit extends Phaser.Physics.Arcade.Sprite {
  /**
   * @desc Constructor initializes an exit sprite at the given position.
   * @param scene - The Phaser scene containing this exit.
   * @param x - Horizontal spawn position.
   * @param y - Vertical spawn position.
   */
  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, '');
    scene.add.existing(this);
    scene.physics.add.existing(this, true);
    this.setDisplaySize(32, 32);
    this.setTint(ColorName.BLUE);

    // Synchronize physics body with visual dimensions after resize
    (this.body as Phaser.Physics.Arcade.StaticBody).updateFromGameObject();
  }
}