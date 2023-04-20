export default class Pokemon {
    name: string
    health: number
    attackDamage: number
    move: string

    constructor(name: string, health: number, attackDamage: number){
        this.name = name
        this.health = health
        this.attackDamage = attackDamage
        this.move = 'tackle'
    }

    takeDamage(damage: number){
        this.health -= damage
        return `${this.name} took ${damage} damage!`
    }
}