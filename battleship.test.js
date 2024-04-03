const {Ship} = require('./battleship');
describe('Class Ship', () => {
    const mockShip = new Ship('yatch',5,null,false);
    test('ship name',() => {
        expect(mockShip.name).toBe('yatch');
    });
    test('ship length',() => {
        expect(mockShip.length).toEqual(5);
    });
    test('ship hits',() => {
        expect(mockShip.hits).toBe(mockShip.hit());

    });
    test('if the ship has sunk',()=>{
        expect(mockShip.sunk).toBe(false)
    });
})
