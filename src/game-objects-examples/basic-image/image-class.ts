/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Jose Angel Portillo Garcia
 * @author Alejandro Feo Martin
 * @author Kyliam Gabriel Chinea Salcedo
 * @since May 03 2026
 * @description Class representing a custom centered image game object.
 */

import * as Phaser from 'phaser';

/**
 * A custom image game object centered on the screen.
 */
export class ImageClass extends Phaser.GameObjects.Image {
  /**
   * @param scene The Phaser scene where the image will be created.
   * @param texture The key of the preloaded texture.
   */
  constructor(scene: Phaser.Scene, texture: string) {
    const screenWidth: number = scene.scale.width;
    const screenHeight: number = scene.scale.height;
    super(scene, screenWidth / 2, screenHeight / 2, texture);
    this.setOrigin(0.5, 0.5);
    scene.add.existing(this);
  }
}