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
import { ImageClass } from './image-class';

/**
 * Represents the primary game scene.
 */
export class MainScene extends Phaser.Scene {
  /* Initializes the scene with a unique key. */
  constructor() {
    super('MainScene');
  }

  /* Loads assets before the scene starts. */
  public preload() {
    const repositoryBasePath = '/2025-2026-pai-phaser-joseangel-kyliam-alejandro/';
    this.load.image('heart', `${repositoryBasePath}assets/img/lives.png`);
  }

  /* Creates game objects after assets are loaded.*/
  public create() {
    new ImageClass(this, 'heart');
  }
}