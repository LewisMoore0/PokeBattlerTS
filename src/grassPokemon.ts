import Pokemon from "./pokemon";

export default class GrassPokemon extends Pokemon {
    type: string

    constructor(name: string, health: number, attackDamage: number) {
        super(name, health, attackDamage)
        this.type ='grass'
    }
}