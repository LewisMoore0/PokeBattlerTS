export default class Pokemon {
    name: string
    health: number
    attackDamage: number
    move: string

    constructor(name: string, health: number, attackDamage: number, move: string = 'tackle'){
        this.name = name
        this.health = health
        this.attackDamage = attackDamage
        this.move = move
    }

    takeDamage(damage: number): string{
        this.health -= damage
        return `${this.name} took ${damage} damage!`
    }

    attack(): number {
        return this.attackDamage
    }

    hasFainted(): boolean {
        return this.health <= 0 ? true : false
    }
}  