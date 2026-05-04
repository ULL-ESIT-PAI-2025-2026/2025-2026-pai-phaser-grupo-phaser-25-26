import { a as __webpack_exports__Game, c as __webpack_exports__Scene, d as __esmMin, l as init_phaser_esm, n as init_colors, o as __webpack_exports__GameObjects, r as __webpack_exports__AUTO, t as ColorName, u as __commonJSMin } from "./colors-Cj52N5Q7.js";
//#region src/game-objects-examples/basic-rectangle/rectangle-class.ts
var RectangleClass;
var init_rectangle_class = __esmMin((() => {
	init_phaser_esm();
	init_colors();
	RectangleClass = class extends __webpack_exports__GameObjects.Rectangle {
		/**
		* @param scene The Phaser scene where the rectangle will be created.
		*/
		constructor(scene) {
			const divider = 2;
			const midX = scene.scale.width / divider;
			const midY = scene.scale.height / divider;
			super(scene, midX, midY, 200, 100, ColorName.GREEN);
			const centerOrigin = .5;
			this.setOrigin(centerOrigin, centerOrigin);
			scene.add.existing(this);
		}
	};
}));
//#endregion
//#region src/game-objects-examples/basic-rectangle/main-scene.ts
var MainScene;
var init_main_scene = __esmMin((() => {
	init_phaser_esm();
	init_rectangle_class();
	MainScene = class extends __webpack_exports__Scene {
		constructor() {
			super("MainScene");
		}
		create() {
			new RectangleClass(this);
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
			parent: "rectangle-app",
			scene: [MainScene],
			backgroundColor: ColorName.CYAN
		});
	}
	startGame();
})))();
//#endregion

//# sourceMappingURL=basicRectangle-B6ySIC8X.js.map