import FirePokemon from '../src/firePokemon'
import Pokemon from '../src/pokemon'
import GrassPokemon from '../src/grassPokemon'
import WaterPokemon from '../src/waterPokemon'

describe('firePokemon', () => {
    test('firePokemon shoudl extend pokemon class', () => {
        const firePokemon = new FirePokemon('Lewis', 100, 25)
        expect(firePokemon).toBeInstanceOf(Pokemon)
    })

    test('firePokemon should have type prop of fire', () => {
        const firePokemon = new FirePokemon('Lewis', 100, 25)
        expect(firePokemon.type).toEqual('fire')
    })

    test('isEffectiveAgainst method returns true when given grass pokemon', () => {
        const firePokemon = new FirePokemon('Lewis', 100, 25)
        const grassPokemon = new GrassPokemon('Lewis', 100, 25)

        expect(firePokemon.isEffectiveAgainst(grassPokemon)).toEqual(true)
    })

    test('isWeakTo returns true when given waterpokemon', () => {
        const firePokemon = new FirePokemon('Lewis', 100, 25)
        const waterPokemon = new WaterPokemon('Lewis', 100, 25)

        expect(firePokemon.isWeakTo(waterPokemon)).toEqual(true)
    })
})