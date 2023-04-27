import FirePokemon from "./firePokemon";
import GrassPokemon from "./grassPokemon";
import Pokemon from "./pokemon";

export default class WaterPokemon extends Pokemon {
    type: string

    constructor(name: string, health: number, attackDamage: number) {
        super(name, health, attackDamage)
        this.type ='water'
    }

    isEffectiveAgainst(pokemon: FirePokemon | GrassPokemon | WaterPokemon): boolean {
        return pokemon.type === 'fire' ? true : false
    }

    isWeakTo(pokemon: FirePokemon | GrassPokemon | WaterPokemon): boolean {
        return pokemon.type === 'grass' ? true : false
    }
}