import GrassPokemon from "./grassPokemon";

export default class Bulbasaur extends GrassPokemon {
    constructor(name: string, health: number, attackDamage: number){
        super(name, health, attackDamage)
        this.move = 'Vine Whip'
    }
}