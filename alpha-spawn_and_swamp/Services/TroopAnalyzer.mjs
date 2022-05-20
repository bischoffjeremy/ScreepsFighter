import {getObjectsByPrototype} from "game/utils";
import {Creep} from "game/prototypes";
import {ATTACK, HEAL, WORK} from "game/constants";
import {constants, prototypes} from "game";


export class TroopAnalyzer {


    constructor() {
    };

    getCreeps(){
        return getObjectsByPrototype(Creep).filter(creep => !creep.my);
    }

    CountAttacker() {
        return getObjectsByPrototype(Creep).filter(creep => !creep.my).filter(creep => creep.body.some(bodyPart => bodyPart.type === ATTACK)).length;
    }

    CountHealers() {
        return getObjectsByPrototype(Creep).filter(creep => !creep.my).filter(creep => creep.body.some(bodyPart => bodyPart.type === WORK)).length;
    }

    CountWorkers() {
        return getObjectsByPrototype(Creep).filter(creep => !creep.my).filter(creep => creep.body.some(bodyPart => bodyPart.type === HEAL)).length;
    }

    getEnergyResources() {
        var energy = null;
        const enemySpawn = getObjectsByPrototype(prototypes.StructureSpawn).filter(spawn => !spawn.my);
        for (var spawn of enemySpawn) {
            energy += mySpawn.store[constants.RESOURCE_ENERGY]
        }
        return energy

    }


}

