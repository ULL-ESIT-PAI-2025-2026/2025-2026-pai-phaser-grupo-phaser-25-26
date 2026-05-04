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
 * @classdesc Scene that automatically transitions to another scene after a set time.
 */
export class AutoChangeScene extends Phaser.Scene {
  constructor() {
    super('AutoChangeScene');
  }

  /**
   * @desc Displays a message and transitions to the next scene after 3 seconds.
   */
  create(): void {
    const textX: number = 400;
    const textY: number = 300;
    const fontSize: string = '32px';
    const centerOrigin: number = 0.5;

    this.add.text(textX, textY, 'Escena 1 (Cambiando en 3...2...1...)', { fontSize: fontSize })
      .setOrigin(centerOrigin);

    const changeDelay: number = 3000;
    const nextSceneKey: string = 'Escena2';

    setTimeout(() => {
      this.scene.start(nextSceneKey);
    }, changeDelay);
  }
}