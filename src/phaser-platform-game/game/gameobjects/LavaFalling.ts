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
 * @desc Represents falling lava spawners that periodically drop lava hazards.
 */

import * as Phaser from 'phaser';
import { ColorName } from '../../../colors';

/**
 * @classdesc A dynamic falling lava sprite that spawns at intervals and falls
 * during gameplay. Deactivates on wall collision and respawns periodically.
 */
export default class LavaFalling extends Phaser.Physics.Arcade.Sprite {
  private initialSpawnX: number;
  private initialSpawnY: number;
  private respawnTimerEvent?: Phaser.Time.TimerEvent;
  private readonly FALL_SPAWN_INTERVAL = 3000;
  private readonly FALL_VELOCITY = 200;

  /**
   * @desc Constructor initializes a falling lava spawner at the given position.
   * @param scene - The Phaser scene containing this lava spawner.
   * @param x - Horizontal spawn position.
   * @param y - Vertical spawn position.
   */
  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, 'main-sprites', 1); 
    this.initialSpawnX = x;
    this.initialSpawnY = y;
    scene.add.existing(this);
    scene.physics.add.existing(this, false); 
    this.setDisplaySize(20, 32); 
    this.setTint(ColorName.ORANGE); 
    this.startFallingCycle();
  }

  /**
   * @desc Initializes the falling cycle and creates the respawn timer.
   */
  private startFallingCycle(): void {
    this.spawnLavaDroplet();
    this.respawnTimerEvent = this.scene.time.addEvent({
      delay: this.FALL_SPAWN_INTERVAL,
      callback: this.spawnLavaDroplet,
      callbackScope: this,
      loop: true
    });
  }

  /**
   * @desc Spawns a new lava droplet at the initial position with downward velocity.
   */
  private spawnLavaDroplet(): void {
    if (!this.scene || !this.scene.sys) return;
    this.setActive(true);
    this.setVisible(true);
    const physicsBody = this.body as Phaser.Physics.Arcade.Body;
    physicsBody.setEnable(true);
    this.setPosition(this.initialSpawnX, this.initialSpawnY);
    physicsBody.reset(this.initialSpawnX, this.initialSpawnY);
    physicsBody.setVelocityY(this.FALL_VELOCITY);
  }

  /**
   * @desc Deactivates the lava droplet when it hits an obstacle,
   * disabling physics simulation until next respawn.
   */
  public deactivate(): void {
    this.setActive(false);
    this.setVisible(false);
    const physicsBody = this.body as Phaser.Physics.Arcade.Body;
    physicsBody.stop(); 
    physicsBody.setEnable(false);
  }

  /**
   * @desc Cleanup method to remove timer event when the sprite is destroyed.
   * @param fromScene - Whether destruction is triggered from scene cleanup.
   */
  destroy(fromScene?: boolean): void {
    if (this.respawnTimerEvent) {
      this.respawnTimerEvent.destroy();
    }
    super.destroy(fromScene);
  }
}