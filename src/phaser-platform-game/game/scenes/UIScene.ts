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
 * @desc Manages the user interface displaying game statistics including
 * remaining lives, collected coins, and elapsed game time.
 */

import * as Phaser from 'phaser';
import eventCenter from '../events/EventCenter';
import { gameState } from '../state/GameState';
import { ColorName } from '../../../colors';

/**
 * @classdesc User Interface scene that displays and updates game statistics
 * in response to game state changes via event system.
 */
export default class UIScene extends Phaser.Scene {
  private livesDisplayText!: Phaser.GameObjects.Text;
  private coinsDisplayText!: Phaser.GameObjects.Text;
  private timerDisplayText!: Phaser.GameObjects.Text;
  constructor() {
    super('UIScene');
  }

  /**
   * @desc Initializes UI elements and registers event listeners for state updates.
   */
  create(): void {
    this.livesDisplayText = this.add.text(20, 20, `Vidas: ${gameState.lives}`, {
      fontSize: '24px'
    });
    this.coinsDisplayText = this.add.text(20, 50, `Monedas: ${gameState.coins}`, {
      fontSize: '24px',
      color: `${ColorName.YELLOW}`
    });
    this.timerDisplayText = this.add.text(780, 20, `Tiempo: 00:00`, {
      fontSize: '24px'
    }).setOrigin(1, 0);
    eventCenter.on('update-lives', (updatedLivesCount: number) => {
      this.livesDisplayText.setText(`Vidas: ${updatedLivesCount}`);
    });
    eventCenter.on('update-coins', (updatedCoinCount: number) => {
      this.coinsDisplayText.setText(`Monedas: ${updatedCoinCount}`);
    });
    eventCenter.on('update-timer', () => {
        this.timerDisplayText.setText(`Tiempo: ${gameState.getFormattedTime()}`);
    });
  }
}