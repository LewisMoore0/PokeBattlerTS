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

    test('should have move prop default to tackle', () => {
        const pokemon = new Pokemon('Lewis', 50, 10)
        expect(pokemon.move).toEqual('tackle')
    })

    test('takeDamage method reduces pokemons health by given number', () =>{
        const pokemon = new Pokemon('Lewis', 50, 10)
        expect(pokemon.takeDamage(10)).toEqual('Lewis took 10 damage!')
        expect(pokemon.health).toBe(40)
    })

    test('attack function returns the pokemons attackDamage', () => {
        const pokemon = new Pokemon('Lewis', 50, 10)
        expect(pokemon.attack()).toEqual(10)
    })


    test('hasFainted function returns true if pokemons HP is zero', () => {
        const pokemon = new Pokemon('Lewis', 50, 10)
        pokemon.takeDamage(50)
        expect(pokemon.hasFainted()).toEqual(true)
    })


    test('hasFainted function returns false if pokemons HP is not zero', () => {
        const pokemon = new Pokemon('Lewis', 50, 10)
        pokemon.takeDamage(40)
        expect(pokemon.hasFainted()).toEqual(false)
    })
})