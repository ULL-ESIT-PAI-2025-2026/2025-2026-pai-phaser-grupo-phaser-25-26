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

export class UIScene extends Phaser.Scene {
  constructor() {
    super('UIScene');
  }

  create() {
    // Dibujamos un panel en la parte inferior
    const panel = this.add.rectangle(400, 550, 800, 100, 0x000000, 0.7);
    
    this.add.text(400, 550, 'SCORE: 1000 - ¡Soy una UI lanzada con launch!', { 
      fontSize: '28px', 
      color: '#ffff00' // Recuerda siempre el '#' para el color
    }).setOrigin(0.5);
  }
}