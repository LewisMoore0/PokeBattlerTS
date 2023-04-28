import Battle from '../src/Battle'
import Trainer from '../src/Trainer'

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
})