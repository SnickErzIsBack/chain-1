const Block = require("./block");

class Blockchain{

    constructor(){
        this.chain = [Block.genesis()]; //In the beginning there was...
    }

    addBlock(data) {
        const block = Block.mineBlock(this.chain[this.chain.length-1],data);
        this.chain.push(block);
        return block;      
    }
    // nexttest

}//EoC

module.exports = Blockchain; //Export als Modul

//EoF