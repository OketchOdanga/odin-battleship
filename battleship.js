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

//GameBoard class/factory function.
//?? place ships at specific coordinates by calling Class Ship.
//?? recieveAttack() checks if the ship has been hit or not.
//?? keep record of attacks(hits and miss).
//?? return if all the ships have sunk.
//const hero = document.getElementById('hero');
class GameBoard {
    ship = new Ship();
    constructor(rows,columns){
        this.rows = rows;
        this.columns = columns;
    }
    createGrid(rows, columns){
        rows = this.rows;
        columns = this.columns;
        let grid = [];
        for (let i = 0; i < columns; i++) {
            grid[i] = [];
            for (let j = 0; j < rows; j++) {               
            grid[i][j] = 0;
            }
        }
        return grid;
    };
    

    printGrid(grid, isEnemy = false){
        grid = this.createGrid();
        for (let i = 0; i < grid.length; i++) {
            let rowStr = i + ' ';
            for (const cell of grid[i]) {
                if (isEnemy && cell == 0) {
                    rowStr += '-'
                } else {
                    rowStr += cell + ' ';
                }
            }
            console.log(rowStr) ;           
        }
        
    };
    //placeShip
    placeYourShip(){}



    //?? recieveAttack() checks if the ship has been hit or not.
    recieveAttack(x,y,grid) {
        grid = this.createGrid(); 
        if (grid[y][x] == 1) {
            grid[y][x] = 2;//hit and call the hit function.
            hit = this.ship.hit();
            return true;
        } else if (grid[y][x] == 0 ) {
            grid[y][x] == 3;//miss
            return false;
        } else {
            return false;
        }
    };
};

/* const board = new GameBoard(4,4);
console.log(board.createGrid(4,4));
console.log(board.printGrid());
console.log(board.recieveAttack(1,1)) */



module.exports = {Ship,GameBoard};
