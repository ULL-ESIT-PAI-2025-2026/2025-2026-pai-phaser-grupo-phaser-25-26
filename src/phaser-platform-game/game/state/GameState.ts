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

  // Se ha eliminado el método resetLevel() para evitar duplicidad lógica con loseLife().

  resetGame(): void {
    this.lives = 3;
    this.currentLevelIndex = 0;
    this.coins = 0;
    this.secondsElapsed = 0;
    eventCenter.emit('update-lives', this.lives);
    eventCenter.emit('update-coins', this.coins);
    eventCenter.emit('update-timer', this.secondsElapsed);
  }

  resetByDead(): void {
    this.lives = 3; // CORRECCIÓN: Ahora las vidas vuelven a 3 al perder por completo.
    this.currentLevelIndex = 0;
    this.coins = 0;
    this.secondsElapsed = 0;
    eventCenter.emit('update-lives', this.lives);
    eventCenter.emit('update-coins', this.coins);
    eventCenter.emit('update-timer', this.secondsElapsed);
  }

  nextLevel(): void {
    this.currentLevelIndex++;
  }

  isGameOver(): boolean {
    return this.lives <= 0;
  }

  addCoin(): void {
    this.coins++;
    eventCenter.emit('update-coins', this.coins);
  }

  getFormattedTime(): string {
    const minutes = Math.floor(this.secondsElapsed / 60);
    const seconds = this.secondsElapsed % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }

  loseLife(): void {
    this.lives--;
    this.coins = 0; 
    eventCenter.emit('update-coins', this.coins);
    eventCenter.emit('update-lives', this.lives);
  }
}

export const gameState = new GameState();