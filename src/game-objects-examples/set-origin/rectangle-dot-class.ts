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
    const rectWidth: number = 200;
    const rectHeight: number = 100;
    super(scene, midX, midY, rectWidth, rectHeight, ColorName.GREEN);
    const centerOriginX: number = 0.5;
    const centerOriginY: number = 0.5;
    this.setOrigin(centerOriginX, centerOriginY);
    scene.add.existing(this);
    const markerRadius: number = 5;
    const startAngle: number = 0;
    const endAngle: number = 360;
    const originMarker = new Phaser.GameObjects.Arc(
      scene,
      midX,
      midY,
      markerRadius,
      startAngle,
      endAngle,
      false,
      ColorName.RED
    );
    scene.add.existing(originMarker);
  }
}