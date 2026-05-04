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
 * @classdesc Main game scene that handles object movement and UI launching.
 */
export class MainScene extends Phaser.Scene {
  private cuadrado!: Phaser.GameObjects.Rectangle;

  constructor() {
    super('MainScene');
  }

  /* Sets up the game objects and schedules the UI scene launch. */
  create(): void {
    const divider: number = 2;
    const midX: number = this.scale.width / divider;
    const textY: number = 50;
    const fontSize: string = '24px';
    const centerOrigin: number = 0.5;

    this.add.text(midX, textY, 'Escena de Juego (Corriendo...)', { fontSize: fontSize })
      .setOrigin(centerOrigin);

    const spawnX: number = 100;
    const spawnY: number = 300;
    const size: number = 50;

    this.cuadrado = this.add.rectangle(spawnX, spawnY, size, size, ColorName.GREEN);

    const launchDelay: number = 2000;
    const uiSceneKey: string = 'UIScene';

    // A los 2 segundos, lanzamos la UI sin cerrar esta escena
    this.time.delayedCall(launchDelay, () => {
      console.log('Lanzando la interfaz (Overlay)...');
      this.scene.launch(uiSceneKey); 
    });
  }

  /* Updates the square position every frame. */
  update(): void {
    const velocity: number = 2;
    const worldBounds: number = 800;
    const resetPosition: number = 0;

    // El cuadrado se mueve constantemente
    this.cuadrado.x += velocity;

    if (this.cuadrado.x > worldBounds) {
      this.cuadrado.x = resetPosition;
    }
  }
}