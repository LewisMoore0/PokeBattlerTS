import Pokemon from "./pokemon"

export default class Pokeball {
    storage: Pokemon[] = []

    catch(pokemon: Pokemon): string {
        if (!this.isEmpty()) {
            return 'This pokeball is already full!'
        }
        this.storage.push(pokemon)
        return `You caught ${pokemon.name}!`
    }

    release() {
        if (this.isEmpty()) {
            return 'This pokeball is empty!'
        }
        this.storage.pop()
       
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