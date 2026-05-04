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
 * @desc Class representing a centered rectangle that responds to touch events.
 */

import * as Phaser from 'phaser';
import { ColorName } from "../../colors";

/**
 * A custom rectangle game object that prints a message when touched.
 */
export class RectangleClass extends Phaser.GameObjects.Rectangle {
  /**
   * @param scene The Phaser scene where the rectangle will be created.
   */
  constructor(scene: Phaser.Scene) {
    const divider: number = 2;
    const midX: number = scene.scale.width / divider;
    const midY: number = scene.scale.height / divider;
    const rectWidth: number = 200;
    const rectHeight: number = 100;
    super(
      scene,
      midX,
      midY,
      rectWidth,
      rectHeight,
      ColorName.GREEN
    );
    const centerOrigin: number = 0.5;
    this.setOrigin(centerOrigin, centerOrigin);
    this.setInteractive();
    this.on('pointerdown', () => {
      console.log('touched!');
    });

    scene.add.existing(this);
  }
}