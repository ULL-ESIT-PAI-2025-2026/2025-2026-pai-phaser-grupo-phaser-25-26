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
 * @description Utility functions for instantiating rectangle game objects.
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
  const midX: number = scene.scale.width / 2;
  const midY: number = scene.scale.height / 2;
  const rect: Phaser.GameObjects.Rectangle = new Phaser.GameObjects.Rectangle(
    scene, 
    midX, 
    midY, 
    200, 
    100, 
    ColorName.RED
  );
  rect.setOrigin(0.5);
  return scene.add.existing(rect);
}