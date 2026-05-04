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
import { RectangleClass } from './rectangle-dot-class';

/**
 * Represents the primary game scene.
 */
export class MainScene extends Phaser.Scene {

  constructor() {
    super('MainScene');
  }

  public create() {
    new RectangleClass(this);
  }
}