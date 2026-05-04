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
 * @desc Represents a collectible coin item that the player can pick up.
 */

import * as Phaser from 'phaser';
import { ColorName } from '../../../colors';

/**
 * @classdesc A static coin sprite that players can collect for points.
 * Coins are stationary collectible items placed throughout the level.
 */
export default class Coin extends Phaser.Physics.Arcade.Sprite {
  /**
   * @desc Constructor initializes a coin sprite at the given position.
   * @param scene - The Phaser scene containing this coin.
   * @param x - Horizontal spawn position.
   * @param y - Vertical spawn position.
   */
  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, 'coin-texture', 0);
    scene.add.existing(this);
    scene.physics.add.existing(this, true); 
    this.setDisplaySize(20, 20);
    this.setTint(ColorName.YELLOW);

    // Synchronize physics body with visual dimensions after resize
    (this.body as Phaser.Physics.Arcade.StaticBody).updateFromGameObject();
  }
}