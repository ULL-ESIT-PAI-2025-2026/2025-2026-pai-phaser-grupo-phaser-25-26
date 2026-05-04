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
 * @classdesc Scene demonstrating the different states of a scene: pause, resume, sleep, and wake.
 */
export class StatesDemo extends Phaser.Scene {
  private cuadrado!: Phaser.GameObjects.Rectangle;

  constructor() { 
    super('StatesDemo'); 
  }

  /* Initializes game objects and schedules scene state transitions. */
  create(): void {
    const spawnX: number = 100;
    const spawnY: number = 400;
    const size: number = 50;

    this.cuadrado = this.add.rectangle(spawnX, spawnY, size, size, ColorName.GREEN);

    const textX: number = 400;
    const textY1: number = 200;
    const textY2: number = 300;
    const textY3: number = 350;
    const fontSize: string = '32px';
    const centerOrigin: number = 0.5;

    this.add.text(textX, textY1, 'Observa el comportamiento de', { fontSize: fontSize }).setOrigin(centerOrigin);
    this.add.text(textX, textY2, '1 PAUSE, RESUME', { fontSize: fontSize }).setOrigin(centerOrigin);
    this.add.text(textX, textY3, '2 SLEEP y WAKE', { fontSize: fontSize }).setOrigin(centerOrigin);

    const delayPause: number = 2000;
    const delayResume: number = 4000;
    const delaySleep: number = 6000;
    const delayWake: number = 8000;

    // A los 2 segundos -> PAUSA
    setTimeout(() => {
      console.log('PAUSA: El tiempo se congela, pero seguimos viendo el cuadrado');
      this.scene.pause(); 
    }, delayPause);

    // A los 4 segundos -> REANUDA
    setTimeout(() => {
      console.log('RESUME: El tiempo vuelve a fluir');
      this.scene.resume(); 
    }, delayResume);

    // A los 6 segundos -> DUERME
    setTimeout(() => {
      console.log('SLEEP: La pantalla se queda negra, la escena descansa');
      this.scene.sleep(); 
    }, delaySleep);

    // A los 8 segundos -> DESPIERTA
    setTimeout(() => {
      console.log('WAKE: Todo vuelve exactamente como estaba');
      this.scene.wake(); 
    }, delayWake);
  }

  /* Updates the rectangle position based on a fixed velocity. */
  update(): void {
    const velocity: number = 2;
    const limitX: number = 800;
    const resetX: number = 0;

    this.cuadrado.x += velocity;
    if (this.cuadrado.x > limitX) {
      this.cuadrado.x = resetX;
    }
  }
}