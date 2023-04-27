import WaterPokemon from '../src/waterPokemon'
import Pokemon from '../src/pokemon'
import FirePokemon from '../src/firePokemon'
import GrassPokemon from '../src/grassPokemon'

describe('WaterPokemon', () => {
    test('WaterPokemon shoudl extend pokemon class', () => {
        const waterPokemon = new WaterPokemon('Lewis', 100, 25)
        expect(waterPokemon).toBeInstanceOf(Pokemon)
    })

    test('waterPokemon should have type prop of fire', () => {
        const waterPokemon = new WaterPokemon('Lewis', 100, 25)
        expect(waterPokemon.type).toEqual('water')
    })


    test('isEffectiveAgainst method returns true when given fire pokemon', () => {
        const waterPokemon = new WaterPokemon('Lewis', 100, 25)
        const firePokemon = new FirePokemon('Lewis', 100, 25)

        expect(waterPokemon.isEffectiveAgainst(firePokemon)).toEqual(true)
    })

    test('isWeakTo method returns true when given grass pokemon', () => {
        const waterPokemon = new WaterPokemon('Lewis', 100, 25)
        const grassPokemon = new GrassPokemon('Lewis', 100, 25)

        expect(waterPokemon.isWeakTo(grassPokemon)).toEqual(true)
    })
})