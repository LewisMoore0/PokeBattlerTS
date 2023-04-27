import Squirtle from '../src/Squirtle'
import WaterPokemon from '../src/waterPokemon'

describe('Squirtle', () => {
    test('should be an instance of WaterPokemon', () => {
        const squirtle = new Squirtle()
        expect(squirtle).toBeInstanceOf(WaterPokemon)
    })

    test('should have move property of Water Gun', () => {
        const squirtle = new Squirtle('squirtle', 100, 10)
        expect(squirtle.move).toEqual('Water Gun')
    })
})