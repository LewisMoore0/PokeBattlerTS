import FirePokemon from "./firePokemon";
import GrassPokemon from "./grassPokemon";
import Trainer from "./Trainer";
import WaterPokemon from "./waterPokemon";

export default class Battle {
    trainer1: Trainer
    trainer2: Trainer
    isTrainer1Turn: boolean

    constructor(trainer1: Trainer, trainer2: Trainer){
        this.trainer1 = trainer1
        this.trainer2 = trainer2
        this.isTrainer1Turn = true
    }

    switchTurns(){
        return this.isTrainer1Turn === true ? this.isTrainer1Turn = false : this.isTrainer1Turn = true
    }

    fight(pokemon1: FirePokemon | WaterPokemon | GrassPokemon, pokemon2: FirePokemon | WaterPokemon | GrassPokemon){
        if (this.isTrainer1Turn){
            if (pokemon1.isEffectiveAgainst(pokemon2)){
                pokemon2.takeDamage(pokemon1.attack() * 1.25)
            }
            if (pokemon1.isWeakTo(pokemon2)){
                pokemon2.takeDamage(pokemon1.attack() * 0.75)
            }
        }

        if(!this.isTrainer1Turn){
            if (pokemon2.isEffectiveAgainst(pokemon1)){
                pokemon1.takeDamage(pokemon2.attack() * 1.25)
            }
            if (pokemon2.isWeakTo(pokemon1)){
                pokemon1.takeDamage(pokemon2.attack() * 0.75)
            }
        }
        this.switchTurns()

        if(pokemon1.hasFainted()){
            return `${pokemon2.name} wins!`
        } else if ( pokemon2.hasFainted()){
            return `${pokemon2.name} wins!`
        } else {
            this.fight(pokemon1, pokemon2)
        }
    }
}