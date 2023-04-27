import Trainer from '../src/Trainer'
import Pokeball from '../src/Pokeball'
import Charmander from '../src/Charmander'
import Squirtle from '../src/Squirtle'

describe('Trainer', () => {
    test('should have a belt property with 6 pokeballs by default', () => {
        const trainer = new Trainer()

        expect(trainer.belt).toEqual([new Pokeball, new Pokeball, new Pokeball, new Pokeball, new Pokeball, new Pokeball])
    })

    test('catch function takes a pokemon and uses an empty pokeball to catch the pokemon', () => {
        const trainer = new Trainer
        const charmander = new Charmander('charmander', 100, 10)

        trainer.catch(charmander)
        expect(trainer.belt[0].storage[0]).toEqual(charmander)
    })

    test('catch function uses next empty pokeball if first is full', () => {
        const trainer = new Trainer
        const charmander = new Charmander('charmander', 100, 10)
        const squirtle = new Squirtle('squirtle', 100, 10)

        trainer.catch(charmander)
        trainer.catch(squirtle)
        expect(trainer.belt[1].storage[0]).toEqual(squirtle)
    })

    test('getPokemon function returns pokemon given in argument', () => {
        const trainer = new Trainer
        const charmander = new Charmander('charmander')
        trainer.catch(charmander)

        expect(trainer.getPokemon('charmander')).toEqual(charmander)
        
    })
})