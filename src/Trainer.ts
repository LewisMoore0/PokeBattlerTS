import Pokeball from "./Pokeball";
import Pokemon from "./pokemon";

export default class Trainer {
    belt: Pokeball[] =  [new Pokeball, new Pokeball, new Pokeball, new Pokeball, new Pokeball, new Pokeball]
    name: string

    constructor(name: string){
        this.name = name
    }

    catch(pokemon: Pokemon){
        this.belt.every((pokeball) => {
            if (pokeball.storage.length === 0) {
                pokeball.catch(pokemon)
                return false
            }
            return true
        })
    }
}