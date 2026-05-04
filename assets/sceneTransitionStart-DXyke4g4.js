import { a as __webpack_exports__Game, c as __webpack_exports__Scene, d as __esmMin, l as init_phaser_esm, n as init_colors, r as __webpack_exports__AUTO, t as ColorName, u as __commonJSMin } from "./colors-Cj52N5Q7.js";
//#region src/scenes-examples/transition-scenes/start/main-scene.ts
var AutoChangeScene;
var init_main_scene = __esmMin((() => {
	init_phaser_esm();
	AutoChangeScene = class extends __webpack_exports__Scene {
		constructor() {
			super("AutoChangeScene");
		}
		/**
		* @desc Displays a message and transitions to the next scene after 3 seconds.
		*/
		create() {
			this.add.text(400, 300, "Escena 1 (Cambiando en 3...2...1...)", { fontSize: "32px" }).setOrigin(.5);
			const changeDelay = 3e3;
			const nextSceneKey = "Escena2";
			setTimeout(() => {
				this.scene.start(nextSceneKey);
			}, changeDelay);
		}
	};
}));
//#endregion
//#region src/scenes-examples/transition-scenes/start/secondary-scene.ts
var Escena2;
var init_secondary_scene = __esmMin((() => {
	init_phaser_esm();
	init_colors();
	Escena2 = class extends __webpack_exports__Scene {
		constructor() {
			super("Escena2");
		}
		/**
		* @desc Displays welcome text with yellow color from the ColorName enum.
		*/
		create() {
			this.add.text(400, 300, "¡Bienvenido a la Escena 2!", {
				fontSize: "32px",
				color: "#" + ColorName.YELLOW.toString(16)
			}).setOrigin(.5);
		}
	};
}));
(/* @__PURE__ */ __commonJSMin((() => {
	init_phaser_esm();
	init_main_scene();
	init_secondary_scene();
	init_colors();
	/**
	* Initializes and starts the Phaser game instance.
	*/
	function startGame() {
		new __webpack_exports__Game({
			type: __webpack_exports__AUTO,
			width: 800,
			height: 600,
			parent: "AutoChangeScene-app",
			scene: [AutoChangeScene, Escena2],
			backgroundColor: ColorName.BLACK
		});
	}
	startGame();
})))();
//#endregion

//# sourceMappingURL=sceneTransitionStart-DXyke4g4.js.map