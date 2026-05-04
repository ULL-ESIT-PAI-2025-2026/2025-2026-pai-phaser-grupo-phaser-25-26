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
import { RectangleClass } from './interactive-rectangle-class';
/**
 * Represents the primary game scene.
 */
export class MainScene extends Phaser.Scene {
  constructor() {
    super('MainScene');
  }

  /*Creates the game objects once the scene is initialized.*/
  public create() {
    new RectangleClass(this);
  }
}