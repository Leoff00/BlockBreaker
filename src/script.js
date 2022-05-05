class BlockBreaker {
  BLOCKS_LENGTH = 20;

  constructor() {
    this.createBlocks();
  }

  createBlocks() {
    const blockContainer = document.querySelector("#blocksContainer");

    for (let i = 0; i < this.BLOCKS_LENGTH; i++) {
      const blocks = document.createElement("div");
      blocks.className = "blocks";
      blocks.style.display = "block";
      blockContainer.appendChild(blocks);
    }
  }

  ballAction() {
    //TODO: IMPLEMENTATION
  }

  platformAction() {
    //TODO: IMPLEMENTATION
  }

  breakBlocks() {
    //TODO: IMPLEMENTATION
  }
}

new BlockBreaker();
