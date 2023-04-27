import FirePokemon from '../src/firePokemon'
import GrassPokemon from '../src/grassPokemon'
import Pokemon from '../src/pokemon'
import WaterPokemon from '../src/waterPokemon'

describe('GrassPokemon', () => {
    test('GrassPokemon shoudl extend pokemon class', () => {
        const grassPokemon = new GrassPokemon('Lewis', 100, 25)
        expect(grassPokemon).toBeInstanceOf(Pokemon)
    })

    test('waterPokemon should have type prop of fire', () => {
        const grassPokemon = new GrassPokemon('Lewis', 100, 25)
        expect(grassPokemon.type).toEqual('grass')
    })

    test('isEffectiveAgainst method returns true when given water pokemon', () => {
        const waterPokemon = new WaterPokemon('Lewis', 100, 25)
        const grassPokemon = new GrassPokemon('Lewis', 100, 25)

        expect(grassPokemon.isEffectiveAgainst(waterPokemon)).toEqual(true)
    })

    test('isWeakTo method returns true when given fire pokemon', () => {
        const firePokemon = new FirePokemon('Lewis', 100, 25)
        const grassPokemon = new GrassPokemon('Lewis', 100, 25)

        expect(grassPokemon.isWeakTo(firePokemon)).toEqual(true)
    })
})