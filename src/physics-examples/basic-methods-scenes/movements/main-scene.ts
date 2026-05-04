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
import { ColorName } from "../../../colors";

/**
 * @classdesc Scene demonstrating basic arcade physics movement, world bounds, and bounce.
 */
export class MovimientoBasicoDemo extends Phaser.Scene {
  constructor() {
    super('MovimientoBasicoDemo');
  }

  /**
   * @desc Creates a bouncing rectangle with arcade physics velocity and world bounds.
   */
  public create(): void {
    const divider: number = 2;
    const midX: number = this.scale.width / divider;
    const midY: number = this.scale.height / divider;

    const rectSize: number = 40;

    const pelota: Phaser.GameObjects.Rectangle = this.add.rectangle(
      midX,
      midY,
      rectSize,
      rectSize,
      ColorName.CYAN
    );

    this.physics.add.existing(pelota);

    const body = pelota.body as Phaser.Physics.Arcade.Body;

    const hasGravity: boolean = false;
    body.setAllowGravity(hasGravity);

    const velocityX: number = 300;
    const velocityY: number = 200;
    body.setVelocity(velocityX, velocityY);

    const shouldCollideWorld: boolean = true;
    body.setCollideWorldBounds(shouldCollideWorld);

    const fullBounce: number = 1;
    body.setBounce(fullBounce, fullBounce);

  }
}