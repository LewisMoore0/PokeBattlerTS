import FirePokemon from "../src/firePokemon";

export default class Charmander extends FirePokemon {
    constructor(name: string, health: number, attackDamage: number, move: string){
        super(name, health, attackDamage)
        this.move = 'Ember'
    }
    
}