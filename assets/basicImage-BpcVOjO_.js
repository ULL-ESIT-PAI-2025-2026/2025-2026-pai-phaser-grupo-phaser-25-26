import { a as __webpack_exports__Game, c as __webpack_exports__Scene, d as __esmMin, l as init_phaser_esm, n as init_colors, o as __webpack_exports__GameObjects, r as __webpack_exports__AUTO, t as ColorName, u as __commonJSMin } from "./colors-Cj52N5Q7.js";
//#region src/game-objects-examples/basic-image/image-class.ts
var ImageClass;
var init_image_class = __esmMin((() => {
	init_phaser_esm();
	ImageClass = class extends __webpack_exports__GameObjects.Image {
		/**
		* @param scene The Phaser scene where the image will be created.
		* @param texture The key of the preloaded texture.
		*/
		constructor(scene, texture) {
			const divider = 2;
			const midX = scene.scale.width / divider;
			const midY = scene.scale.height / divider;
			super(scene, midX, midY, texture);
			const centerOrigin = .5;
			const defaultScale = 1.5;
			this.setOrigin(centerOrigin, centerOrigin);
			this.setScale(defaultScale);
			scene.add.existing(this);
		}
	};
}));
//#endregion
//#region src/game-objects-examples/basic-image/main-scene.ts
var MainScene;
var init_main_scene = __esmMin((() => {
	init_phaser_esm();
	init_image_class();
	MainScene = class extends __webpack_exports__Scene {
		constructor() {
			super("MainScene");
		}
		preload() {
			this.load.image("heart", `/2025-2026-pai-phaser-joseangel-kyliam-alejandro/assets/img/lives.png`);
		}
		create() {
			new ImageClass(this, "heart");
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
			parent: "image-app",
			scene: [MainScene],
			backgroundColor: ColorName.CYAN
		});
	}
	startGame();
})))();
//#endregion

//# sourceMappingURL=basicImage-BpcVOjO_.js.map