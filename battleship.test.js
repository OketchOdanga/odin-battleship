const {Ship} = require('./battleship');
describe('Class Ship', () => {
    const mockShip = new Ship('yatch',5,0,false);
    test('ship name',() => {
        expect(mockShip.name).toBe('yatch');
    });
    test('ship length',() => {
        expect(mockShip.length).toEqual(5);
    });
    test('ship hits',() => {
        expect(mockShip.hits).toBe(0);

    });
    test('hit function', ()=>{
        expect(mockShip.hit()).toBe(mockShip.hits);
    })
    test('if the ship has sunk',()=>{
        expect(mockShip.sunk).toBe(false)
    });
    test('if the ship has sunk using isSunk',()=>{
        expect(mockShip.isSunk()).toBe(false)
    });
})
