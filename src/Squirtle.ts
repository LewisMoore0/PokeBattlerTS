import WaterPokemon from "./waterPokemon";

export default class Squirtle extends WaterPokemon {
    constructor(name: string, health: number, attackDamage: number){
        super(name, health, attackDamage)
        this.move = 'Water Gun'
    }
}