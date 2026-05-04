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
import { ColorName } from "../../../colors";

/**
 * @classdesc Scene demonstrating basic arcade physics movement, world bounds, and bounce.
 */
export class MovimientoBasicoDemo extends Phaser.Scene {
  constructor() {
    super('MovimientoBasicoDemo');
  }

  /* Initializes the physics-enabled object and configures its movement properties. */
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

    // Casteamos el body para acceder a las propiedades de Arcade Physics
    const body = pelota.body as Phaser.Physics.Arcade.Body;

    // 1. Desactivamos gravedad para movimiento lineal puro
    const hasGravity: boolean = false;
    body.setAllowGravity(hasGravity);

    // 2. Velocidad inicial (píxeles por segundo)
    const velocityX: number = 300;
    const velocityY: number = 200;
    body.setVelocity(velocityX, velocityY);

    // 3. Colisión con los límites del mundo (bordes de la pantalla)
    const shouldCollideWorld: boolean = true;
    body.setCollideWorldBounds(shouldCollideWorld);

    // 4. Elasticidad perfecta (conserva el 100% de la energía en el rebote)
    const fullBounce: number = 1;
    body.setBounce(fullBounce, fullBounce);
    
    // El motor de físicas se encarga del movimiento sin necesidad de update() manual.
  }
}