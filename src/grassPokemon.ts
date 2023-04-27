import FirePokemon from "./firePokemon";
import Pokemon from "./pokemon";
import WaterPokemon from "./waterPokemon";

export default class GrassPokemon extends Pokemon {
    type: string

    constructor(name: string, health: number, attackDamage: number) {
        super(name, health, attackDamage)
        this.type ='grass'
    }

    isEffectiveAgainst(pokemon: FirePokemon | GrassPokemon | WaterPokemon): boolean {
        return pokemon.type === 'water' ? true : false
    }

    isWeakTo(pokemon: FirePokemon | GrassPokemon | WaterPokemon): boolean {
        return pokemon.type === 'fire' ? true : false
    }
}