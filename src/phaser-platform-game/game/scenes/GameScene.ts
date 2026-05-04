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
 * @desc Main gameplay scene managing the platform game logic, physics collisions,
 * level progression, and event system for UI coordination.
 */

import * as Phaser from 'phaser';
import { LEVELS } from '../levels';
import { LevelBuilder } from '../builders/LevelBuilder';
import { gameState } from '../state/GameState';
import eventCenter from '../events/EventCenter';

import MusicScene from  './music_scene'; 
import Player from '../gameobjects/Player';
import LavaFalling from '../gameobjects/LavaFalling';

export default class GameScene extends Phaser.Scene {
  private playerCharacter!: Player;
  private wallGroup!: Phaser.Physics.Arcade.StaticGroup;
  private coinGroup!: Phaser.Physics.Arcade.StaticGroup;
  private staticLavaGroup!: Phaser.Physics.Arcade.StaticGroup;
  private fallingLavaGroup!: Phaser.Physics.Arcade.Group; 
  private exitGroup!: Phaser.Physics.Arcade.StaticGroup;
  private gameTimerEvent?: Phaser.Time.TimerEvent;

  // VARIABLE AÑADIDA: Candado para evitar el Multi-hit al morir
  private isDead: boolean = false;

  constructor() {
    super('GameScene');
  }

  preload(): void {
    const repositoryBasePath = '/2025-2026-pai-phaser-joseangel-kyliam-alejandro/';
    
    this.load.image('coin-texture', `${repositoryBasePath}assets/img/coin.png`);
    this.load.spritesheet('main-sprites', `${repositoryBasePath}assets/img/sprites.png`, {
      frameWidth: 16,
      frameHeight: 16,
      endFrame: 2
    });
    this.load.spritesheet('player-sprite', `${repositoryBasePath}assets/img/player.png`, {
      frameWidth: 24,
      frameHeight: 30
    });
    
    this.load.on('filecomplete-spritesheet-main-sprites', () => {
      console.log('✅ Spritesheet cargado con éxito usando la ruta base de Vite');
    });
  }

  private get audioManager(): MusicScene {
    return this.scene.get('MusicScene') as MusicScene;
  }

  create(): void {
    // CORRECCIÓN: Reseteamos la muerte al crear/reiniciar la escena
    this.isDead = false;

    if (!this.scene.isActive('UIScene')) {
      this.scene.launch('UIScene');
    }
    
    if (!this.scene.isActive('MusicScene')) {
      this.scene.launch('MusicScene');
    }

    const currentLevelData = LEVELS[gameState.currentLevelIndex];
    const builtLevelObjects = LevelBuilder.build(this, currentLevelData);

    this.playerCharacter = builtLevelObjects.player;
    this.wallGroup = builtLevelObjects.walls;
    this.coinGroup = builtLevelObjects.coins;
    this.staticLavaGroup = builtLevelObjects.lavaStatic;
    this.fallingLavaGroup = builtLevelObjects.lavaFallingGroup; 
    this.exitGroup = builtLevelObjects.exits;

    this.input.keyboard?.on('keydown-P', () => {
      this.scene.pause();
      this.scene.launch('PauseScene');
    });

    this.gameTimerEvent = this.time.addEvent({
      delay: 1000,
      callback: () => {
        gameState.secondsElapsed++;
        eventCenter.emit('update-timer');
      },
      loop: true
    });

    this.setupCollisionHandlers();
  }

  update(): void {
    if (this.playerCharacter) {
      this.playerCharacter.update();
    }
  }

  private setupCollisionHandlers(): void {
    this.physics.add.collider(this.playerCharacter, this.wallGroup);
    
    this.physics.add.overlap(this.fallingLavaGroup, this.wallGroup, (lavaObject) => {
      const fallingLavaInstance = lavaObject as LavaFalling;
      fallingLavaInstance.deactivate(); 
    });
    
    this.physics.add.overlap(this.playerCharacter, this.coinGroup, (_, coin) => {
      coin.destroy();
      gameState.addCoin(); 
      this.audioManager.playCoinSound();
    });
    
    this.physics.add.overlap(this.playerCharacter, this.staticLavaGroup, () => this.handlePlayerDeath());
    this.physics.add.overlap(this.playerCharacter, this.fallingLavaGroup, () => this.handlePlayerDeath()); 
    this.physics.add.overlap(this.playerCharacter, this.exitGroup, () => this.handleLevelCompletion());
  }

  private handlePlayerDeath(): void {
    // CORRECCIÓN: Candado activado. Si ya ha muerto en este frame, ignoramos colisiones extra.
    if (this.isDead) return;
    this.isDead = true;
    
    // Pausamos las físicas un instante para que no sigan habiendo overlaps mientras se reinicia
    this.physics.pause();

    // Solo quitamos una vida
    gameState.loseLife();

    if (gameState.isGameOver()) {
      console.log('Game Over - No vidas restantes');
      this.audioManager.stopBackgroundMusic();
      this.audioManager.playGameOverSound();
      
      gameState.resetByDead();
      this.scene.restart();
    } else {
      this.audioManager.playDeathSound();
      this.scene.restart();
    }
  }

  private handleLevelCompletion(): void {
    gameState.nextLevel();
    this.audioManager.stopBackgroundMusic();

    if (gameState.currentLevelIndex < LEVELS.length) {
      this.audioManager.playStageClearSound();
      this.scene.restart(); 
    } else {
      console.log('¡Juego completado!');
      this.audioManager.playWorldClearSound();
      gameState.resetGame();
      this.scene.restart(); 
    }
  }
}