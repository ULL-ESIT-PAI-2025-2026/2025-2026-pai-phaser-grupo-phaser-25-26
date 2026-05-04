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
 * @classdesc Scene that automatically transitions to another scene after a set time.
 */
export class AutoChangeScene extends Phaser.Scene {
  constructor() { 
    super('AutoChangeScene'); 
  }

  /* Displays a message and sets a timer to switch to the next scene. */
  create(): void {
    const textX: number = 400;
    const textY: number = 300;
    const fontSize: string = '32px';
    const centerOrigin: number = 0.5;

    this.add.text(textX, textY, 'Escena 1 (Cambiando en 3...2...1...)', { fontSize: fontSize })
      .setOrigin(centerOrigin);

    const changeDelay: number = 3000;
    const nextSceneKey: string = 'Escena2';

    // Magia para la presentación: a los 3000 ms (3 segundos), cambia sola.
    setTimeout(() => {
      this.scene.start(nextSceneKey); // Cierra esta y abre la siguiente
    }, changeDelay);
  }
}