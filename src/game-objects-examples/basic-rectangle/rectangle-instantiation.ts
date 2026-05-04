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
 * @desc Utility functions for instantiating rectangle game objects.
 */

import * as Phaser from 'phaser';
import { ColorName } from "../../colors";

/**
 * Creates and adds a centered rectangle to the provided scene.
 *
 * @param scene The Phaser scene where the rectangle will be added.
 * @returns The newly created rectangle game object.
 */
export function createRectangle(scene: Phaser.Scene): Phaser.GameObjects.Rectangle {
  const divider: number = 2;
  const midX: number = scene.scale.width / divider;
  const midY: number = scene.scale.height / divider;
  const rectangleWidth: number = 200;
  const rectangleHeight: number = 100;
  const centerOrigin: number = 0.5;
  const rectangle: Phaser.GameObjects.Rectangle = new Phaser.GameObjects.Rectangle(
    scene,
    midX,
    midY,
    rectangleWidth,
    rectangleHeight,
    ColorName.RED
  );
  rectangle.setOrigin(centerOrigin);
  return scene.add.existing(rectangle);
}