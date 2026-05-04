/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Jose Angel Portillo Garcia
 * @author Alejandro Feo Martin
 * @author Kyliam Gabriel Chinea Salcedo
 * @since May 04 2026
 * @description Main scene that delegates object logic to its classes.
 */

import * as Phaser from 'phaser';
import { SpriteClass } from './sprite-class';

export class MainScene extends Phaser.Scene {
  constructor() {
    super('MainScene');
  }

  public preload(): void {
    const repositoryBasePath = '/2025-2026-pai-phaser-joseangel-kyliam-alejandro/';
    this.load.spritesheet('player', `${repositoryBasePath}assets/img/player.png`, {
      frameWidth: 24,
      frameHeight: 30
    });
  }

  public create(): void {
    new SpriteClass(this, 'player');
  }
}