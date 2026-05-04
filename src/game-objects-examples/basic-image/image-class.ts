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
 * @desc Class representing a custom centered image game object.
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
    const divider: number = 2;
    const midX: number = scene.scale.width / divider;
    const midY: number = scene.scale.height / divider;
    super(scene, midX, midY, texture);
    const centerOrigin: number = 0.5;
    const defaultScale: number = 1.5;
    this.setOrigin(centerOrigin, centerOrigin);
    this.setScale(defaultScale);
    scene.add.existing(this);
  }
}