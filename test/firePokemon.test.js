import FirePokemon from '../src/firePokemon'
import Pokemon from '../src/pokemon'

describe('firePokemon', () => {
    test('firePokemon shoudl extend pokemon class', () => {
        const firePokemon = new FirePokemon('Lewis', 100, 25)
        expect(firePokemon).toBeInstanceOf(Pokemon)
    })

    test('firePokemon should have type prop of fire', () => {
        const firePokemon = new FirePokemon('Lewis', 100, 25)
        expect(firePokemon.type).toEqual('fire')
    })
})