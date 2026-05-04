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
 * @desc Manages the User Interface scene, displaying metrics and handling UI interactions.
 */

import * as Phaser from 'phaser';
import { ColorName } from '../../colors';

/**
 * @classdesc UI Scene responsible for overlaying game metrics and interactive controls.
 */
export default class UIScene extends Phaser.Scene {
  private collisionCounter: number = 0;
  private counterText!: Phaser.GameObjects.Text;
  private toggleVisibilityButton!: Phaser.GameObjects.Text;
  private isCounterVisible: boolean = true;

  /**
   * @desc Instantiates the UI Scene with its unique Phaser key.
   */
  constructor() {
    super('UIScene');
  }

  /**
   * @desc Initializes all UI elements, registers interactivity, and sets up event listeners.
   */
  create(): void {
    this.collisionCounter = 0;

    this.counterText = this.add.text(10, 10, 'Choques: 0', {
      fontSize: '24px',
      color: `${ColorName.WHITE}`
    });

    this.toggleVisibilityButton = this.add.text(10, 50, 'Toggle contador', {
      fontSize: '20px',
      backgroundColor: `${ColorName.BLACK}`,
      padding: { x: 10, y: 5 }
    }).setInteractive({ useHandCursor: true });

    this.toggleVisibilityButton.on('pointerdown', () => {
      this.isCounterVisible = !this.isCounterVisible;
      this.counterText.setVisible(this.isCounterVisible);
    });

    const gameScene: Phaser.Scene = this.scene.get('GameScene');

    if (gameScene) {
      gameScene.events.on('collision', this.incrementCollisionCounter, this);
    }

    this.events.on(Phaser.Scenes.Events.SHUTDOWN, () => {
      if (gameScene) {
        gameScene.events.off('collision', this.incrementCollisionCounter, this);
      }
    });
  }

  /**
   * @desc Increases the collision counter by one and updates the UI text display.
   */
  private incrementCollisionCounter(): void {
    this.collisionCounter++;
    this.counterText.setText(`Choques: ${this.collisionCounter}`);
  }
}