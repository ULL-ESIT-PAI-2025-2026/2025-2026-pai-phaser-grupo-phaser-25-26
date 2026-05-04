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
 * @description Main scene class that manages the instantiation of 
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

  /* Attempts to display an image without preloading its texture. */
  create(): void {
    const divider: number = 2;
    const midX: number = this.scale.width / divider;
    const midY: number = this.scale.height / divider;
    
    const missingTextureKey: string = 'imagen_que_no_existe';

    // Al no existir la textura, Phaser mostrará el "Missing Texture Object" (cuadrado verde y negro).
    this.add.image(midX, midY, missingTextureKey); 
  }
}