import GrassPokemon from '../src/grassPokemon'
import Pokemon from '../src/pokemon'

describe('GrassPokemon', () => {
    test('GrassPokemon shoudl extend pokemon class', () => {
        const grassPokemon = new GrassPokemon('Lewis', 100, 25)
        expect(grassPokemon).toBeInstanceOf(Pokemon)
    })

    test('waterPokemon should have type prop of fire', () => {
        const grassPokemon = new GrassPokemon('Lewis', 100, 25)
        expect(grassPokemon.type).toEqual('grass')
    })
})