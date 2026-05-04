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
 * @description Player class that handles keyboard movement.
 */

import * as Phaser from 'phaser';
import { ColorName } from "../../colors";

export class Player extends Phaser.GameObjects.Rectangle {
  private cursors: Phaser.Types.Input.Keyboard.CursorKeys | undefined;

  constructor(scene: Phaser.Scene) {
    const divider: number = 2;
    const midX: number = scene.scale.width / divider;
    const midY: number = scene.scale.height / divider;
    const size: number = 50;
    super(scene, midX, midY, size, size, ColorName.GREEN);
    scene.add.existing(this);
    // Inicializamos las teclas de dirección (flechas)
    if (scene.input.keyboard) {
      this.cursors = scene.input.keyboard.createCursorKeys();
    }
  }
  /**
   * Actualiza la posición según las teclas pulsadas.
   * Se debe llamar desde el update() de la escena.
   */
  public updateMovement(): void {
    if (!this.cursors) {
      return;
    }
    const velocity: number = 5;
    if (this.cursors.left.isDown) {
      this.x -= velocity;
    } else if (this.cursors.right.isDown) {
      this.x += velocity;
    }
    if (this.cursors.up.isDown) {
      this.y -= velocity;
    } else if (this.cursors.down.isDown) {
      this.y += velocity;
    }
  }
}