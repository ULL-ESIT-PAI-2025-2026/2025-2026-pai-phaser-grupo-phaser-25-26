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
 * @desc Class representing a custom centered rectangle with an origin marker.
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
    const divider: number = 2;
    const midX: number = scene.scale.width / divider;
    const midY: number = scene.scale.height / divider;
    const defaultWidth: number = 200;
    const defaultHeight: number = 100;
    super(
      scene,
      midX,
      midY,
      defaultWidth,
      defaultHeight,
      ColorName.GREEN
    );
    const centerOrigin: number = 0.5;
    this.setOrigin(centerOrigin, centerOrigin);
    scene.add.existing(this);
  }
}