import Pokemon from '../src/pokemon'

describe('Pokemon', () => {
    test('should have name prop', () => {
        const pokemon = new Pokemon('Lewis')
        expect(pokemon.name).toEqual('Lewis')
    })

    test('should have health prop', () => {
        const pokemon = new Pokemon('Lewis', 50)
        expect(pokemon.health).toEqual(50)
    })

    test('should have attack damage prop', () => {
        const pokemon = new Pokemon('Lewis', 50, 10)
        expect(pokemon.attackDamage).toEqual(10)
    })
})