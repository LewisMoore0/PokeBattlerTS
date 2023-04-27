import Pokemon from "./pokemon"

export default class Pokeball {
    storage: Pokemon[] = []
    pokemonName: string = ''

    catch(pokemon: Pokemon): string {
        if (!this.isEmpty()) {
            return 'This pokeball is already full!'
        }
        this.storage.push(pokemon)
        this.pokemonName = pokemon.name
        return `You caught ${pokemon.name}!`
    }

    release(): string {
        if (this.isEmpty()) {
            return 'This pokeball is empty!'
        }
        this.storage.pop()
        return `Go ${this.pokemonName}!`
    }

    isEmpty(): boolean {
        return this.storage.length === 0 ? true : false
    }

    contains(): string {
        if (this.isEmpty()){
            return 'This Pokeball is empty!'
        }
        return this.storage[0].name
    }
}