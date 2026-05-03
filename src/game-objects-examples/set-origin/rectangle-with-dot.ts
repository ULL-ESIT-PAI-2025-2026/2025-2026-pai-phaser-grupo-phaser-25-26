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
    const midX: number = scene.scale.width / 2;
    const midY: number = scene.scale.height / 2 ;
    super(
      scene, 
      midX, 
      midY, 
      200, 
      100, 
      ColorName.GREEN
    );
    this.setOrigin(0.5, 0.5);
    scene.add.existing(this);
    const originMarker = new Phaser.GameObjects.Arc(scene, midX, midY, 5, 0, 360, false, ColorName.RED);
    scene.add.existing(originMarker);
  }
}