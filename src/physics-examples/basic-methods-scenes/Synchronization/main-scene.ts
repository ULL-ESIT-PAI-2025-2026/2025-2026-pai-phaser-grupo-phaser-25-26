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
import { ColorName } from "../../colors";

/**
 * @classdesc Scene demonstrating how to enable, disable, and reset physics bodies.
 */
export class EstadoFisicasDemo extends Phaser.Scene {
  constructor() {
    super('EstadoFisicasDemo');
  }

  /* Initializes the player and schedules physics state changes. */
  create(): void {
    const spawnX: number = 100;
    const spawnY: number = 100;
    const rectSize: number = 40;

    const jugador: Phaser.GameObjects.Rectangle = this.add.rectangle(
      spawnX, 
      spawnY, 
      rectSize, 
      rectSize, 
      ColorName.GREEN
    );
    
    this.physics.add.existing(jugador);
    const body = jugador.body as Phaser.Physics.Arcade.Body;

    const initialVelocityX: number = 150;
    body.setVelocityX(initialVelocityX);

    // Configuración de retardos (ms)
    const disableDelay: number = 2000;
    const resetDelay: number = 4000;

    // A los 2 segundos, apagamos sus físicas (Se vuelve un fantasma congelado)
    this.time.delayedCall(disableDelay, () => {
      const isEnabled: boolean = false;
      console.log('setEnable(false): Pierde sus propiedades físicas y gravedad');
      body.setEnable(isEnabled); 
    });

    // A los 4 segundos, lo teletransportamos a salvo
    this.time.delayedCall(resetDelay, () => {
      const isEnabled: boolean = true;
      const teleportX: number = 400;
      const teleportY: number = 50;

      console.log('body.reset(x, y): Vuelve a nacer en otro sitio con velocidad cero');
      body.setEnable(isEnabled);
      body.reset(teleportX, teleportY);
    });
  }
}