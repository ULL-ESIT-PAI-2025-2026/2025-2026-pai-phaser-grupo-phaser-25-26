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
 * @description Class representing a custom centered rectangle with an origin marker.
 */

import * as Phaser from 'phaser';
import { ColorName } from "../../colors";

/**
 * A custom rectangle game object centered on the screen.
 */
export class RectangleClass extends Phaser.GameObjects.Rectangle {
  /**
   * @param scene The Phaser scene where the rectangle will be created.
   */
  constructor(scene: Phaser.Scene) {
    const screenWidth: number = scene.scale.width;
    const screenHeight: number = scene.scale.height;
    super(
      scene, 
      screenWidth / 2, 
      screenHeight / 2, 
      200, 
      100, 
      ColorName.GREEN
    );
    this.setOrigin(0.5, 0.5);
    scene.add.existing(this);
  }
}