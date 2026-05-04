import { a as __webpack_exports__Game, c as __webpack_exports__Scene, d as __esmMin, l as init_phaser_esm, n as init_colors, o as __webpack_exports__GameObjects, r as __webpack_exports__AUTO, t as ColorName, u as __commonJSMin } from "./colors-Cj52N5Q7.js";
//#region src/game-objects-examples/basic-movement/player-class.ts
var Player;
var init_player_class = __esmMin((() => {
	init_phaser_esm();
	init_colors();
	Player = class extends __webpack_exports__GameObjects.Rectangle {
		cursors;
		constructor(scene) {
			const divider = 2;
			const midX = scene.scale.width / divider;
			const midY = scene.scale.height / divider;
			const size = 50;
			super(scene, midX, midY, size, size, ColorName.GREEN);
			scene.add.existing(this);
			if (scene.input.keyboard) this.cursors = scene.input.keyboard.createCursorKeys();
		}
		/**
		* Actualiza la posición según las teclas pulsadas.
		* Se debe llamar desde el update() de la escena.
		*/
		updateMovement() {
			if (!this.cursors) return;
			const velocity = 5;
			if (this.cursors.left.isDown) this.x -= velocity;
			else if (this.cursors.right.isDown) this.x += velocity;
			if (this.cursors.up.isDown) this.y -= velocity;
			else if (this.cursors.down.isDown) this.y += velocity;
		}
	};
}));
//#endregion
//#region src/game-objects-examples/basic-movement/main-scene.ts
var MainScene;
var init_main_scene = __esmMin((() => {
	init_phaser_esm();
	init_player_class();
	MainScene = class extends __webpack_exports__Scene {
		player;
		constructor() {
			super("MainScene");
		}
		create() {
			this.player = new Player(this);
		}
		update() {
			this.player.updateMovement();
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
			parent: "movement-app",
			scene: [MainScene],
			backgroundColor: ColorName.CYAN
		});
	}
	startGame();
})))();
//#endregion

//# sourceMappingURL=basicMovement-De-fJbHE.js.map