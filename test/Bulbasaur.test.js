import Bulbasaur from '../src/Bulbasaur'
import GrassPokemon from '../src/grassPokemon'

describe('Bulbasaur', () => {
    test('should be instance of grassPokemon', () => {
        const bulbasaur = new Bulbasaur('bulbasaur', 100, 10)
        expect(bulbasaur).toBeInstanceOf(GrassPokemon)
    })

    test('should have move vine whip', () => {
        const bulbasaur = new Bulbasaur('bulbasaur', 100, 10)
        expect(bulbasaur.move).toEqual('Vine Whip')
    })
})