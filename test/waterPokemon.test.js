import WaterPokemon from '../src/waterPokemon'
import Pokemon from '../src/pokemon'

describe('WaterPokemon', () => {
    test('WaterPokemon shoudl extend pokemon class', () => {
        const waterPokemon = new WaterPokemon('Lewis', 100, 25)
        expect(waterPokemon).toBeInstanceOf(Pokemon)
    })

    test('waterPokemon should have type prop of fire', () => {
        const waterPokemon = new WaterPokemon('Lewis', 100, 25)
        expect(waterPokemon.type).toEqual('water')
    })
})