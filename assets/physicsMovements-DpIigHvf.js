import { a as __webpack_exports__Game, c as __webpack_exports__Scene, d as __esmMin, l as init_phaser_esm, n as init_colors, r as __webpack_exports__AUTO, t as ColorName, u as __commonJSMin } from "./colors-Cj52N5Q7.js";
//#region src/physics-examples/basic-methods-scenes/movements/main-scene.ts
var MovimientoBasicoDemo;
var init_main_scene = __esmMin((() => {
	init_phaser_esm();
	init_colors();
	MovimientoBasicoDemo = class extends __webpack_exports__Scene {
		constructor() {
			super("MovimientoBasicoDemo");
		}
		/**
		* @desc Creates a bouncing rectangle with arcade physics velocity and world bounds.
		*/
		create() {
			const divider = 2;
			const midX = this.scale.width / divider;
			const midY = this.scale.height / divider;
			const rectSize = 40;
			const pelota = this.add.rectangle(midX, midY, rectSize, rectSize, ColorName.CYAN);
			this.physics.add.existing(pelota);
			const body = pelota.body;
			body.setAllowGravity(false);
			body.setVelocity(300, 200);
			body.setCollideWorldBounds(true);
			const fullBounce = 1;
			body.setBounce(fullBounce, fullBounce);
		}
	};
}));
(/* @__PURE__ */ __commonJSMin((() => {
	init_phaser_esm();
	init_colors();
	init_main_scene();
	/**
	* Initializes and starts the Phaser game instance.
	*/
	function startGame() {
		new __webpack_exports__Game({
			type: __webpack_exports__AUTO,
			width: 800,
			height: 600,
			parent: "MovimientoBasicoDemo-app",
			scene: [MovimientoBasicoDemo],
			backgroundColor: ColorName.BLACK,
			physics: {
				default: "arcade",
				arcade: {
					gravity: {
						y: 300,
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

//# sourceMappingURL=physicsMovements-DpIigHvf.js.map