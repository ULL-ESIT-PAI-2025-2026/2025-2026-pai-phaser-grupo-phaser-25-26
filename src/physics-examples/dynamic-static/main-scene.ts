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
 * @classdesc Scene demonstrating the difference between dynamic and static physics bodies.
 */
export class DinamicoEstaticoDemo extends Phaser.Scene {
  constructor() {
    super('DinamicoEstaticoDemo');
  }

  /* Initializes the scene elements and physics objects.*/
  create(): void {
    const divider: number = 2;
    const midX: number = this.scale.width / divider;
    const textY: number = 50;
    const fontSize: string = '24px';
    const centerOrigin: number = 0.5;
    this.add.text(midX, textY, 'Izquierda: Dinámico | Derecha: Estático', { fontSize: fontSize }).setOrigin(centerOrigin);
    // Configuración común de las cajas
    const boxY: number = 200;
    const boxSize: number = 50;
    const dynamicBoxX: number = 200;
    const staticBoxX: number = 600;
    // 1. OBJETO DINÁMICO (Se cae al vacío)
    const cajaDinamica: Phaser.GameObjects.Rectangle = this.add.rectangle(
      dynamicBoxX, 
      boxY, 
      boxSize, 
      boxSize, 
      ColorName.RED
    );
    this.physics.add.existing(cajaDinamica);
    // 2. OBJETO ESTÁTICO (Se queda flotando en el aire inamovible)
    const muroEstatico: Phaser.GameObjects.Rectangle = this.add.rectangle(
      staticBoxX, 
      boxY, 
      boxSize, 
      boxSize, 
      ColorName.GRAY
    );
    const isStatic: boolean = true;
    this.physics.add.existing(muroEstatico, isStatic); 
  }
}