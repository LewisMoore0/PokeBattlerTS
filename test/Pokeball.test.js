import Pokeball from '../src/Pokeball'
import Charmander from '../src/Charmander'

describe('Pokeball' , () => {
    test('should have a storage property of empty array by default', () => {
        const pokeball = new Pokeball
        expect(pokeball.storage).toEqual([])
    })

    test('throw function should put pokemon given as arg in storage', () => {
        const pokeball = new Pokeball
        const charmander = new Charmander

        pokeball.catch(charmander)

        expect(pokeball.storage).toEqual([charmander])
    })

    test('release function should release pokemon from the pokeball and return its name', () => {
        const pokeball = new Pokeball
        const charmander = new Charmander('Charmander', 100, 10)

        pokeball.catch(charmander)
        expect(pokeball.release()).toEqual('Go Charmander!')
        expect(pokeball.storage).toEqual([])
    })

    test('catch fucntion wont store pokemon is pokeball already has a pokemon', () => {
        const pokeball = new Pokeball
        const charmander = new Charmander
        const anotherCharmander = new Charmander

        pokeball.catch(charmander)

        expect(pokeball.catch(anotherCharmander)).toEqual('This pokeball is already full!')
    })


    test('release function will return string if storage is empty', () => {
        const pokeball = new Pokeball

        expect(pokeball.release()).toEqual('This pokeball is empty!')
    })

    test('contains function should return the name of the pokemon in storage', () => {
        const pokeball = new Pokeball
        const charmander = new Charmander('Charmander', 100, 10)

        pokeball.catch(charmander)

        expect(pokeball.contains()).toEqual('Charmander')
    })

    test('contains function should return an error if no pokemon in storage', () => {
        const pokeball = new Pokeball

        expect(pokeball.contains()).toEqual('This Pokeball is empty!')
    })
})