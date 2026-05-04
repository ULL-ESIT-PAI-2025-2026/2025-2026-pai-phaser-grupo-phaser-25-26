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
 * @desc Represents the player character with physics, animation, and keyboard controls.
 */

import * as Phaser from 'phaser';
import MusicScene from '../scenes/music_scene';

/**
 * @classdesc The player character sprite with physics-based movement, jumping,
 * animation state management, and keyboard-based input handling.
 */
export default class Player extends Phaser.Physics.Arcade.Sprite {
  private keyboardInputCursors: Phaser.Types.Input.Keyboard.CursorKeys;
  private readonly HORIZONTAL_VELOCITY = 160;
  private readonly JUMP_VELOCITY = 330;
  private readonly RUN_ANIMATION_FRAME_RATE = 12;
  private readonly IDLE_ANIMATION_FRAME_RATE = 20;

  /**
   * @desc Constructor initializes the player sprite with physics and input handling.
   * @param scene - The Phaser scene instance containing this player.
   * @param x - Initial horizontal spawn position.
   * @param y - Initial vertical spawn position.
   */
  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, 'player-sprite');
    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.setDisplaySize(32, 48);
    this.setCollideWorldBounds(true);
    this.keyboardInputCursors = scene.input.keyboard!.createCursorKeys();
    this.initializeAnimations(scene);
  }

  /**
   * @desc Creates animation definitions for player states (run, idle, jump).
   * @param scene - The scene containing animation definitions.
   */
  private initializeAnimations(scene: Phaser.Scene): void {
    if (!scene.anims.exists('run')) {
      scene.anims.create({
        key: 'run',
        frames: scene.anims.generateFrameNumbers('player-sprite', { start: 0, end: 9 }),
        frameRate: this.RUN_ANIMATION_FRAME_RATE,
        repeat: -1
      });
    }
    if (!scene.anims.exists('idle')) {
      scene.anims.create({
        key: 'idle',
        frames: [{ key: 'player-sprite', frame: 8 }],
        frameRate: this.IDLE_ANIMATION_FRAME_RATE
      });
    }
    if (!scene.anims.exists('jump')) {
      scene.anims.create({
        key: 'jump',
        frames: [{ key: 'player-sprite', frame: 9 }],
        frameRate: this.IDLE_ANIMATION_FRAME_RATE
      });
    }
  }

  /**
   * @desc Updates player state every frame: handles movement input, collision detection,
   * animation state, and jump physics.
   */
  update(): void {
    const physicsBody = this.body as Phaser.Physics.Arcade.Body;
    if (this.keyboardInputCursors.left?.isDown) {
      this.setVelocityX(-this.HORIZONTAL_VELOCITY);
      this.setFlipX(true);
    } else if (this.keyboardInputCursors.right?.isDown) {
      this.setVelocityX(this.HORIZONTAL_VELOCITY);
      this.setFlipX(false);
    } else {
      this.setVelocityX(0);
    }
    this.updateAnimationState(physicsBody);
    if (this.keyboardInputCursors.up?.isDown && physicsBody.blocked.down) {
      this.setVelocityY(-this.JUMP_VELOCITY);
    }
  }

  /**
   * @desc Updates the animation state based on player velocity and ground status.
   * @param physicsBody - The player's Arcade physics body.
   */
  private updateAnimationState(physicsBody: Phaser.Physics.Arcade.Body): void {
    if (!physicsBody.blocked.down) {
      this.anims.play('jump', true);
    } else {
      if (physicsBody.velocity.x !== 0) {
        this.anims.play('run', true);
      } else {
        this.anims.play('idle', true);
      }
    }
  }
}