class Block{

    // Constructor + Parameter
    constructor(timestamp, lastHash, hash, data){
        this.timestamp = timestamp; //Zeitstempel
        this.lastHash = lastHash; //Hash des vorhergehenden Blocks
        this.hash = hash; //Hash des aktuellen Blocks
        this.data = data; //Inhalt des aktuellen Blocks
    }

    toString(){ //für De-Bugging-Zwecke, Inhalt des Obj.
            return ` Block - 
            Timestamp:  ${this.timestamp}
            Last Hash:  ${this.lastHash.substring(0,13)}
            Hash:       ${this.hash.substring(0,13)}
            Data:       ${this.data}
            `;   
    }

    static genesis(){
        return new this("Genesis Time", "-------------","h17zl1-bu7zl1", []);
    }

    // 2. Block ??

    static mineBlock(lastBlock, data) {
        const timestamp = Date.now();
        const lastHash = lastBlock.hash;
        const hash = "HASH to Do";
        return new this(timestamp,lastHash,hash,data);
    }

}//EoC

module.exports = Block; //Export als Modul