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

/**
 * Represents the primary game scene.
 */
export class StatesDemo extends Phaser.Scene {
  private cuadrado!: Phaser.GameObjects.Rectangle;

  constructor() { 
    super('StatesDemo'); 
  }

  create() {
    this.cuadrado = this.add.rectangle(100, 400, 50, 50, 0x00ff00);
    this.add.text(400, 200, 'Observa el comportamiento de', { fontSize: '32px' }).setOrigin(0.5);
    this.add.text(400, 300, '1 PAUSE, RESUME', { fontSize: '32px' }).setOrigin(0.5);
    this.add.text(400, 350, '2 SLEEP y WAKE', { fontSize: '32px' }).setOrigin(0.5);

    // A los 2 segundos -> PAUSA (El update se detiene, el render sigue)
    setTimeout(() => {
      console.log('PAUSA: El tiempo se congela, pero seguimos viendo el cuadrado');
      this.scene.pause(); 
    }, 2000);

    // A los 4 segundos -> REANUDA
    setTimeout(() => {
      console.log('RESUME: El tiempo vuelve a fluir');
      this.scene.resume(); 
    }, 4000);

    // A los 6 segundos -> DUERME (El update se detiene Y el render también)
    setTimeout(() => {
      console.log('SLEEP: La pantalla se queda negra, la escena descansa');
      this.scene.sleep(); 
    }, 6000);

    // A los 8 segundos -> DESPIERTA
    setTimeout(() => {
      console.log('WAKE: Todo vuelve exactamente como estaba');
      this.scene.wake(); 
    }, 8000);
  }
  update() {
    this.cuadrado.x += 2;
    if (this.cuadrado.x > 800) this.cuadrado.x = 0;
  }
}