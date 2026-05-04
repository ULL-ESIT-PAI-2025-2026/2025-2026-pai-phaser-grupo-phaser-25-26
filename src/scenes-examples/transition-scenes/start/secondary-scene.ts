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
import { ColorName } from '../../../colors';

export class Escena2 extends Phaser.Scene {
  constructor() { 
    super('Escena2'); 
  }

  create() {

    this.add.text(400, 300, '¡Bienvenido a la Escena 2!', { 
      fontSize: '32px', 
      color: '#' + ColorName.YELLOW.toString(16) // Convertimos el número a hexadecimal para usarlo como color CSS 
    }).setOrigin(0.5);
  }
}