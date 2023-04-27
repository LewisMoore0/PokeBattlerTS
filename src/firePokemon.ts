import GrassPokemon from "./grassPokemon";
import Pokemon from "./pokemon";
import WaterPokemon from "./waterPokemon";

export default class FirePokemon extends Pokemon {
    type: string

    constructor(name: string, health: number, attackDamage: number) {
        super(name, health, attackDamage)
        this.type ='fire'
    }

    isEffectiveAgainst(pokemon: FirePokemon | GrassPokemon | WaterPokemon): boolean {
        return pokemon.type === 'grass' ? true : false
    }

    isWeakTo(pokemon: FirePokemon | GrassPokemon | WaterPokemon): boolean {
        return pokemon.type === 'water' ? true : false
    }
}