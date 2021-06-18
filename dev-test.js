const Block = require("./block");
const Blockchain = require("./blockchain");

// const block = new Block("time","hash1","hash2","data");
// console.log(block);
// console.log(block.toString());

// console.log(Block.genesis().toString());

// const testBlock = Block.mineBlock(Block.genesis(),"testDaten");
// console.log(testBlock.toString());

// Init + 1. Block (Genesis)
const blockchain = new Blockchain();
console.log(blockchain);

// 2.Block
blockchain.addBlock("100$ to boo, 50$ to me");
console.log(blockchain);

// 3.Block
blockchain.addBlock("20$ to boo, 4$ to me");
console.log(blockchain);

// 4.Block
blockchain.addBlock("12$ to boo, 45$ to me");
console.log(blockchain);

// 5.Block
blockchain.addBlock("120$ to boo, 75$ to me");
console.log(blockchain);

//EoF