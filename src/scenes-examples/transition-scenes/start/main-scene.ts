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

export class AutoChangeScene extends Phaser.Scene {
  constructor() { 
    super('AutoChangeScene'); 
  }

  create() {
    this.add.text(400, 300, 'Escena 1 (Cambiando en 3...2...1...)', { fontSize: '32px' }).setOrigin(0.5);

    // Magia para la presentación: a los 3000 ms (3 segundos), cambia sola.
    setTimeout(() => {
      this.scene.start('Escena2'); // Cierra esta y abre la siguiente
    }, 3000);
  }
}