import Pokemon from "./pokemon";

export default class WaterPokemon extends Pokemon {
    type: string

    constructor(name: string, health: number, attackDamage: number) {
        super(name, health, attackDamage)
        this.type ='water'
    }
}