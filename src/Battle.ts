import Trainer from "./Trainer";

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
}