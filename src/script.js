class BlockBreaker {
  #MAX_BLOCK_LENGTH = 24;
  #MIN_BLOCK_LENGTH = 6;

  #platform = document.createElement("div");
  #platformContainer = document.querySelector("#platformContainer");

  get getPlatformContainer() {
    return this.#platformContainer;
  }

  get getPlatform() {
    return this.#platform;
  }

  constructor() {
    this.createBlocks(this.#MIN_BLOCK_LENGTH, this.#MAX_BLOCK_LENGTH);
    this.createPlatformAction(this.#platform, this.#platformContainer);
    this.ballAction();
  }

  createBlocks(minBlockLength, maxBlockLength) {
    const blockContainer = document.querySelector("#blocksContainer");
    const randomizeBlocks = Math.floor(
      Math.random() * (maxBlockLength - minBlockLength) + minBlockLength
    );

    for (let i = 0; i < randomizeBlocks; i++) {
      const blocks = document.createElement("div");
      blocks.className = "blocks";
      blockContainer.appendChild(blocks);
    }
  }

  ballAction() {
    const ball = document.querySelector("#ball");
    let { width, height, x, y } = ball.getBoundingClientRect();

    setInterval(() => {
      console.log({ width, height });
    }, 1000);
  }

  movePlatform() {
    //TODO: IMPLEMENTATION
  }

  createPlatformLogic(event) {
    const isArrowLeft = event.keyCode === 37;
    const isArrowRight = event.keyCode === 39;

    if (isArrowLeft) {
      console.log();
    }
    if (isArrowRight) {
      console.log();
    }
  }

  createPlatformAction(platform, platformContainer) {
    platform.className = "platform";
    platformContainer.appendChild(platform);

    document.body.addEventListener(
      "keyup",
      this.createPlatformLogic.bind(this.#platformContainer)
    );
  }

  breakBlocks() {
    //TODO: IMPLEMENTATION
  }
}

new BlockBreaker();
