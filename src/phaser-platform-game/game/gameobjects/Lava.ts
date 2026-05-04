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
 * @desc Represents a stationary lava hazard that damages the player on contact.
 */

import * as Phaser from 'phaser';
import { ColorName } from '../../../colors';

/**
 * @classdesc A static lava sprite representing a hazard obstacle.
 * Kills the player upon contact and causes level restart.
 */
export default class Lava extends Phaser.Physics.Arcade.Sprite {
  /**
   * @desc Constructor initializes a lava sprite at the given position.
   * @param scene - The Phaser scene containing this lava.
   * @param x - Horizontal spawn position.
   * @param y - Vertical spawn position.
   */
  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, 'main-sprites', 1);
    scene.add.existing(this);
    scene.physics.add.existing(this, true);
    this.setDisplaySize(32, 32);
    this.setTint(ColorName.RED);
    (this.body as Phaser.Physics.Arcade.StaticBody).updateFromGameObject();
  }
}