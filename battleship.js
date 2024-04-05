//BATTLESHIP.
/* //factory function.

function Ship(name,length,hit,sunk) {
    return {name,length,hit,sunk}
} */

//class
class Ship {
    constructor(name,length,hits,sunk)
    {
    this.name = name;
    this.length = length;
    this.hits = hits;
    this.sunk = sunk;
    }
    //increases the number of 'hits' in your ship.
    hit(){
        for (let i = 0; i < Array(this.length).length; i++) {
            this.hits += this.length[i];
            return this.hits;
        }
    }
    //tells if a ship has sunk based on the number of hits.
    isSunk(hits) {
        hits = this.hits;
        this.hits === this.length ? this.sunk = true : this.sunk = false;
        return this.sunk;

/*         if (this.hits === this.length) {
            return this.sunk = true;
        } else {
            return this.sunk = false;
        } */

    }
}

class GameBoard{
    board = [];
    constructor(rows,columns){
        this.rows = rows;
        this.columns = columns;
    }
}

class Player{

}





module.exports = {Ship};
