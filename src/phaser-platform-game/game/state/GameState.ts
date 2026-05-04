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
 * @desc Manages and tracks global game state including lives, level progression,
 * coin collection, and elapsed game time.
 */

import eventCenter from '../events/EventCenter';

class GameState {
  public lives: number = 3;
  public currentLevelIndex: number = 0;
  public coins: number = 0;
  public secondsElapsed: number = 0;

  /**
   * @desc Resets all game state to initial values.
   */
  resetGame(): void {
    this.lives = 3;
    this.currentLevelIndex = 0;
    this.coins = 0;
    this.secondsElapsed = 0;
    eventCenter.emit('update-lives', this.lives);
    eventCenter.emit('update-coins', this.coins);
    eventCenter.emit('update-timer', this.secondsElapsed);
  }

  /**
   * @desc Resets game state after player death (all lives lost).
   */
  resetByDead(): void {
    this.lives = 3;
    this.currentLevelIndex = 0;
    this.coins = 0;
    this.secondsElapsed = 0;
    eventCenter.emit('update-lives', this.lives);
    eventCenter.emit('update-coins', this.coins);
    eventCenter.emit('update-timer', this.secondsElapsed);
  }

  /**
   * @desc Advances to the next level index.
   */
  nextLevel(): void {
    this.currentLevelIndex++;
  }

  /**
   * @desc Checks if the player has no remaining lives.
   * @returns True if lives are zero or less.
   */
  isGameOver(): boolean {
    return this.lives <= 0;
  }

  /**
   * @desc Increments the coin counter and emits an update event.
   */
  addCoin(): void {
    this.coins++;
    eventCenter.emit('update-coins', this.coins);
  }

  /**
   * @desc Formats elapsed seconds as MM:SS string.
   * @returns Formatted time string.
   */
  getFormattedTime(): string {
    const minutes = Math.floor(this.secondsElapsed / 60);
    const seconds = this.secondsElapsed % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }

  /**
   * @desc Decrements lives and resets coins on death; emits update events.
   */
  loseLife(): void {
    this.lives--;
    this.coins = 0;
    eventCenter.emit('update-coins', this.coins);
    eventCenter.emit('update-lives', this.lives);
  }
}

export const gameState = new GameState();