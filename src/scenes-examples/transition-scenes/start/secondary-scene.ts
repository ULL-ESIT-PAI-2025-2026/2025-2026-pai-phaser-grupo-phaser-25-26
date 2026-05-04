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

/**
 * @classdesc Second scene of the sequence, displayed after the auto-change.
 */
export class Escena2 extends Phaser.Scene {
  constructor() { 
    super('Escena2'); 
  }

  /* Displays the welcome message with the specified style and color. */
  create(): void {
    const textX: number = 400;
    const textY: number = 300;
    const fontSize: string = '32px';
    const centerOrigin: number = 0.5;
    const hexBase: number = 16;

    this.add.text(textX, textY, '¡Bienvenido a la Escena 2!', { 
      fontSize: fontSize, 
      color: '#' + ColorName.YELLOW.toString(hexBase) 
    }).setOrigin(centerOrigin);
  }
}