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

export class EstadoFisicasDemo extends Phaser.Scene {
  constructor() { super('EstadoFisicasDemo'); }

  create() {
    const jugador = this.add.rectangle(100, 100, 40, 40, 0x00ff00);
    this.physics.add.existing(jugador);
    const body = jugador.body as Phaser.Physics.Arcade.Body;

    // Le damos velocidad hacia la derecha y que caiga
    body.setVelocityX(150);

    // A los 2 segundos, apagamos sus físicas (Se vuelve un fantasma congelado)
    setTimeout(() => {
      console.log('setEnable(false): Pierde sus propiedades físicas y gravedad');
      body.setEnable(false); 
    }, 2000);

    // A los 4 segundos, lo teletransportamos a salvo
    setTimeout(() => {
      console.log('body.reset(x, y): Vuelve a nacer en otro sitio con velocidad cero');
      body.setEnable(true); // Lo volvemos a encender
      body.reset(400, 50);  // Lo teletransportamos al techo y le quita la velocidad que llevaba
    }, 4000);
  }
}