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
 * @desc Main scene class that manages the instantiation of
 *              different rectangle game objects.
 */

import * as Phaser from 'phaser';

/**
 * @classdesc Scene demonstrating Phaser's fallback behavior when a texture is missing.
 */
export class MissingPreloadDemo extends Phaser.Scene {
  constructor() {
    super('MissingPreloadDemo');
  }

  /**
   * @desc Creates an image with a non-existent texture key to demonstrate fallback behavior.
   */
  create(): void {
    const divider: number = 2;
    const midX: number = this.scale.width / divider;
    const midY: number = this.scale.height / divider;

    const missingTextureKey: string = 'imagen_que_no_existe';

    this.add.image(midX, midY, missingTextureKey);
  }
}