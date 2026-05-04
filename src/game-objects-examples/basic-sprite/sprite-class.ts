/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Jose Angel Portillo Garcia
 * @author Alejandro Feo Martin
 * @author Kyliam Gabriel Chinea Salcedo
 * @since May 04 2026
 * @desc Class representing a sprite that manages its own animations.
 */

import * as Phaser from 'phaser';

/**
 * A sprite that encapsulates its animation logic.
 */
export class SpriteClass extends Phaser.GameObjects.Sprite {
  /**
   * @param scene The Phaser scene.
   * @param texture The key of the spritesheet.
   */
  constructor(scene: Phaser.Scene, texture: string) {
    const divider: number = 2;
    const midX: number = scene.scale.width / divider;
    const midY: number = scene.scale.height / divider;
    super(scene, midX, midY, texture);
    const defaultOrigin: number = 0.5;
    const defaultScale: number = 2;
    this.setOrigin(defaultOrigin);
    this.setScale(defaultScale);
    scene.add.existing(this);
    this.initAnimations();
  }

  private initAnimations(): void {

    if (!this.scene.anims.exists('walk')) {
      this.scene.anims.create({
        key: 'walk',
        frames: this.scene.anims.generateFrameNumbers(this.texture.key, {
          start: 0,
          end: 7
        }),
        frameRate: 10,
        repeat: -1
      });
    }
    this.play('walk');
  }
}