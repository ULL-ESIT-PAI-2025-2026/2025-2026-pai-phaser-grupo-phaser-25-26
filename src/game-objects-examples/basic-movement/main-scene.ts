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
 * @desc Main scene class that manages the instantiation of different game objects.
 */

import * as Phaser from 'phaser';
import { Player } from './player-class';

/**
 * @classdesc Represents the primary game scene.
 */
export class MainScene extends Phaser.Scene {
  private player!: Player;

  constructor() {
    super('MainScene');
  }

  public create(): void {
    this.player = new Player(this);
  }

  public update(): void {

    this.player.updateMovement();
  }
}