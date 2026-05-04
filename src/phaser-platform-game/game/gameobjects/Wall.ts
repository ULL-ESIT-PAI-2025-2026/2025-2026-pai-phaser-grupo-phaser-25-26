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
 * @desc Represents a static platform wall tile that provides collision surfaces.
 */

import * as Phaser from 'phaser';
import { ColorName } from '../../../colors';

/**
 * @classdesc A static platform wall sprite with fixed physics properties.
 * Walls serve as solid surfaces for player movement and jumping.
 */
export default class Wall extends Phaser.Physics.Arcade.Sprite {
  /**
   * @desc Constructor initializes a wall sprite at the given position.
   * @param scene - The Phaser scene containing this wall.
   * @param x - Horizontal spawn position.
   * @param y - Vertical spawn position.
   */
  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, 'main-sprites', 0);
    scene.add.existing(this);
    scene.physics.add.existing(this, true); 
    this.setDisplaySize(32, 32);
    this.setTint(ColorName.GRAY);
    (this.body as Phaser.Physics.Arcade.StaticBody).updateFromGameObject();
  }
}