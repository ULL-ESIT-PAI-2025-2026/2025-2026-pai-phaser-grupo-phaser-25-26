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

export class MovimientoBasicoDemo extends Phaser.Scene {
  constructor() { super('MovimientoBasicoDemo'); }

  create() {
    const pelota = this.add.rectangle(400, 300, 40, 40, 0x00ffff);
    this.physics.add.existing(pelota);

    const body = pelota.body as Phaser.Physics.Arcade.Body;

    // 1. Quitamos la gravedad para que no se caiga al fondo
    body.setAllowGravity(false);

    // 2. Le damos una velocidad inicial (Pixels por segundo)
    body.setVelocity(300, 200);

    // 3. Hacemos que la pantalla sea una caja de cristal de la que no puede salir
    body.setCollideWorldBounds(true);

    // 4. Hacemos que sea una pelota de goma perfecta (rebote 1 = 100% de fuerza conservada)
    body.setBounce(1, 1);
    
    // NOTA PARA LA PRESENTACIÓN: ¡No hay método update()! El motor de físicas hace todo el trabajo solo.
  }
}