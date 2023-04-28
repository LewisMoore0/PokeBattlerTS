import Battle from '../src/Battle'
import Trainer from '../src/Trainer'
import Charmander from '../src/Charmander'
import Squirtle from '../src/Squirtle'

describe('Battle', () => {
    test('takes two Trainer objects', () => {
        const trainer1 = new Trainer('Lewis')
        const trainer2 = new Trainer('Anna')
        const battle = new Battle(trainer1, trainer2)

        expect(battle.trainer1.name).toEqual('Lewis')
    })

    test('should have a isTrainer1Turn prop set to true by default', () => {
        const trainer1 = new Trainer('Lewis')
        const trainer2 = new Trainer('Anna')
        const battle = new Battle(trainer1, trainer2)

        expect(battle.isTrainer1Turn).toEqual(true)
    })

    test('switchTurns function shold reverse isTrainer1Turn property', () => {
        const trainer1 = new Trainer('Lewis')
        const trainer2 = new Trainer('Anna')
        const battle = new Battle(trainer1, trainer2)

        battle.switchTurns()
        expect(battle.isTrainer1Turn).toEqual(false)
    })

    test('fight function takes two pokemon, and Trainer1 pokemon attacks first and tkaes in to account strengths and weaknesses', () => {
        const trainer1 = new Trainer('Lewis')
        const trainer2 = new Trainer('Anna')
        const pokemon1 = new Charmander('charmander', 50, 10)
        const pokemon2 = new Squirtle('squirtle', 50, 10)
        const battle = new Battle(trainer1, trainer2)

        battle.fight(pokemon1, pokemon2)
        expect(pokemon1.health).toBe(0)
        expect(pokemon2.health).toBe(20)




    })
})