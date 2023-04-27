import Charmander from '../src/Charmander'
import Pokemon from '../src/pokemon'

describe('Charmander', () => {
    test('should extend firePokemon', () => {
        const charmander = new Charmander()
        expect(charmander).toBeInstanceOf(Pokemon)
    })

    test('should have move property of Ember', () => {
        const charmander = new Charmander('steve', 100, 15, 'Ember')
        expect(charmander.move).toEqual('Ember')
    })
})