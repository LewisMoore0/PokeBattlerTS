export default class Pokemon {
    name: string
    health: number
    attackDamage: number

    constructor(name: string, health: number, attackDamage: number){
        this.name = name
        this.health = health
        this.attackDamage = attackDamage
    }
}