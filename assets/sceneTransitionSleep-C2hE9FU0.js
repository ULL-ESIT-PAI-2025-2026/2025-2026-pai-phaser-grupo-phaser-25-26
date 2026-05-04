import { a as __webpack_exports__Game, c as __webpack_exports__Scene, d as __esmMin, l as init_phaser_esm, n as init_colors, r as __webpack_exports__AUTO, t as ColorName, u as __commonJSMin } from "./colors-Cj52N5Q7.js";
//#region src/scenes-examples/transition-scenes/sleep/main-scene.ts
var StatesDemo;
var init_main_scene = __esmMin((() => {
	init_phaser_esm();
	init_colors();
	StatesDemo = class extends __webpack_exports__Scene {
		cuadrado;
		constructor() {
			super("StatesDemo");
		}
		create() {
			const spawnX = 100;
			const spawnY = 400;
			const size = 50;
			this.cuadrado = this.add.rectangle(spawnX, spawnY, size, size, ColorName.GREEN);
			const textX = 400;
			const textY1 = 200;
			const textY2 = 300;
			const textY3 = 350;
			const fontSize = "32px";
			const centerOrigin = .5;
			this.add.text(textX, textY1, "Observa el comportamiento de", { fontSize }).setOrigin(centerOrigin);
			this.add.text(textX, textY2, "1 PAUSE, RESUME", { fontSize }).setOrigin(centerOrigin);
			this.add.text(textX, textY3, "2 SLEEP y WAKE", { fontSize }).setOrigin(centerOrigin);
			const delayPause = 2e3;
			const delayResume = 4e3;
			const delaySleep = 6e3;
			const delayWake = 8e3;
			setTimeout(() => {
				console.log("PAUSA: El tiempo se congela, pero seguimos viendo el cuadrado");
				this.scene.pause();
			}, delayPause);
			setTimeout(() => {
				console.log("RESUME: El tiempo vuelve a fluir");
				this.scene.resume();
			}, delayResume);
			setTimeout(() => {
				console.log("SLEEP: La pantalla se queda negra, la escena descansa");
				this.scene.sleep();
			}, delaySleep);
			setTimeout(() => {
				console.log("WAKE: Todo vuelve exactamente como estaba");
				this.scene.wake();
			}, delayWake);
		}
		/**
		* @desc Moves the rectangle horizontally and resets at screen edge.
		*/
		update() {
			const velocity = 2;
			const limitX = 800;
			const resetX = 0;
			this.cuadrado.x += velocity;
			if (this.cuadrado.x > limitX) this.cuadrado.x = resetX;
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
			parent: "StatesDemo-app",
			scene: [StatesDemo],
			backgroundColor: ColorName.BLACK
		});
	}
	startGame();
})))();
//#endregion

//# sourceMappingURL=sceneTransitionSleep-C2hE9FU0.js.map