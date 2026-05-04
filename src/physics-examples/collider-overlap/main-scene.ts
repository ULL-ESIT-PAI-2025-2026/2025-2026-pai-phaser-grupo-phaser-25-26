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
import { ColorName } from "../../colors";

/**
 * @classdesc Scene demonstrating the difference between colliders and overlaps in physics.
 */
export class ColliderOverlapDemo extends Phaser.Scene {
  constructor() {
    super('ColliderOverlapDemo');
  }

  /**
   * @desc Creates collider and overlap examples side by side for comparison.
   */
  create(): void {
    const textY: number = 50;
    const leftColumnX: number = 200;
    const rightColumnX: number = 600;
    const fontSize: string = '20px';
    const centerOrigin: number = 0.5;

    this.add.text(leftColumnX, textY, 'Collider (Choca)', { fontSize: fontSize })
      .setOrigin(centerOrigin);
    this.add.text(rightColumnX, textY, 'Overlap (Atraviesa)', { fontSize: fontSize })
      .setOrigin(centerOrigin);

    const groundY: number = 400;
    const groundWidth: number = 200;
    const groundHeight: number = 20;
    const isStatic: boolean = true;

    const suelo1: Phaser.GameObjects.Rectangle = this.add.rectangle(
      leftColumnX,
      groundY,
      groundWidth,
      groundHeight,
      ColorName.GRAY
    );
    const suelo2: Phaser.GameObjects.Rectangle = this.add.rectangle(
      rightColumnX,
      groundY,
      groundWidth,
      groundHeight,
      ColorName.GRAY
    );

    this.physics.add.existing(suelo1, isStatic);
    this.physics.add.existing(suelo2, isStatic);

    const boxSpawnY: number = 100;
    const boxSize: number = 40;

    const cajaCollider: Phaser.GameObjects.Rectangle = this.add.rectangle(
      leftColumnX,
      boxSpawnY,
      boxSize,
      boxSize,
      ColorName.GREEN
    );
    const cajaOverlap: Phaser.GameObjects.Rectangle = this.add.rectangle(
      rightColumnX,
      boxSpawnY,
      boxSize,
      boxSize,
      ColorName.YELLOW
    );

    this.physics.add.existing(cajaCollider);
    this.physics.add.existing(cajaOverlap);

    this.physics.add.collider(cajaCollider, suelo1);

    this.physics.add.overlap(cajaOverlap, suelo2, () => {
      suelo2.setFillStyle(ColorName.RED);
    });
  }
}