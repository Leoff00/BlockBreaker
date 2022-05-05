class BlockBreaker {
  #MAX_BLOCK_LENGTH = 24;
  #MIN_BLOCK_LENGTH = 6;

  platform = document.createElement("div");
  platformContainer = document.querySelector("#platformContainer");

  constructor() {
    this.createBlocks(this.#MIN_BLOCK_LENGTH, this.#MAX_BLOCK_LENGTH);
    this.createPlatformAction(this.platform, this.platformContainer);
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
    //TODO: IMPLEMENTATION
  }

  movePlatform() {}

  createPlatformLogic(event) {
    const isArrowLeft = event.keyCode === 37;
    const isArrowRight = event.keyCode === 39;

    if (isArrowLeft) {
      console.log("Left");
    }

    if (isArrowRight) {
      console.log("Right");
    }
  }

  createPlatformAction(platform, platformContainer) {
    platform.className = "platform";
    platformContainer.appendChild(platform);

    return document.body.addEventListener("keyup", this.createPlatformLogic);
  }

  breakBlocks() {
    //TODO: IMPLEMENTATION
  }
}

new BlockBreaker();
