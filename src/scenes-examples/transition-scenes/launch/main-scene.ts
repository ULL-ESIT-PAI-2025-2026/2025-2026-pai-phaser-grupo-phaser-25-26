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

export class MainScene extends Phaser.Scene {
  private cuadrado!: Phaser.GameObjects.Rectangle;

  constructor() {
    super('MainScene');
  }

  create() {
    this.add.text(400, 50, 'Escena de Juego (Corriendo...)', { fontSize: '24px' }).setOrigin(0.5);
    this.cuadrado = this.add.rectangle(100, 300, 50, 50, 0x00ff00);

    // A los 2 segundos, lanzamos la UI sin cerrar esta escena
    this.time.delayedCall(2000, () => {
      console.log('Lanzando la interfaz (Overlay)...');
      this.scene.launch('UIScene'); 
    });
  }

  update() {
    // El cuadrado se mueve constantemente
    this.cuadrado.x += 2;
    if (this.cuadrado.x > 800) this.cuadrado.x = 0;
  }
}