import { a as __webpack_exports__Game, c as __webpack_exports__Scene, d as __esmMin, l as init_phaser_esm, n as init_colors, r as __webpack_exports__AUTO, t as ColorName, u as __commonJSMin } from "./colors-Cj52N5Q7.js";
//#region src/physics-examples/basic-methods-scenes/Synchronization/main-scene.ts
var EstadoFisicasDemo;
var init_main_scene = __esmMin((() => {
	init_phaser_esm();
	init_colors();
	EstadoFisicasDemo = class extends __webpack_exports__Scene {
		constructor() {
			super("EstadoFisicasDemo");
		}
		/**
		* @desc Creates a rectangle that shows physics body enable/disable and reset behavior.
		*/
		create() {
			const spawnX = 100;
			const spawnY = 100;
			const rectSize = 40;
			const jugador = this.add.rectangle(spawnX, spawnY, rectSize, rectSize, ColorName.GREEN);
			this.physics.add.existing(jugador);
			const body = jugador.body;
			body.setVelocityX(150);
			const disableDelay = 2e3;
			const resetDelay = 4e3;
			this.time.delayedCall(disableDelay, () => {
				const isEnabled = false;
				console.log("setEnable(false): Pierde sus propiedades físicas y gravedad");
				body.setEnable(isEnabled);
			});
			this.time.delayedCall(resetDelay, () => {
				const isEnabled = true;
				const teleportX = 400;
				const teleportY = 50;
				console.log("body.reset(x, y): Vuelve a nacer en otro sitio con velocidad cero");
				body.setEnable(isEnabled);
				body.reset(teleportX, teleportY);
			});
		}
	};
}));
(/* @__PURE__ */ __commonJSMin((() => {
	init_phaser_esm();
	init_main_scene();
	init_colors();
	/**
	* Initializes and starts the Phaser game instance.
	*/
	function startGame() {
		new __webpack_exports__Game({
			type: __webpack_exports__AUTO,
			width: 800,
			height: 600,
			parent: "EstadoFisicasDemo-app",
			scene: [EstadoFisicasDemo],
			backgroundColor: ColorName.BLACK,
			physics: {
				default: "arcade",
				arcade: {
					gravity: {
						y: 200,
						x: 0
					},
					debug: true
				}
			}
		});
	}
	startGame();
})))();
//#endregion

//# sourceMappingURL=physicsSync-BWnXAH0w.js.map