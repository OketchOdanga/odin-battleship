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
        for (let i = 0; i <= this.length.length; i++) {
            this.hits += this.length[i];
        }
    }
    //tells if a ship has sunk based on the number of hits.
    isSunk() {
        this.hits === this.length ? this.sunk = true : this.sunk = false;
/* 
        if (this.hits === this.length) {
            this.sunk = true;
        } else {
            this.sunk = false;
        }
 */
    }
}
