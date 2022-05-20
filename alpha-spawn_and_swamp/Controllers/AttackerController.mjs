import {getObjectsByPrototype} from "game/utils";
import {Creep, StructureSpawn} from "game/prototypes";
import {ATTACK, ERR_NOT_IN_RANGE} from "game/constants";

export function AttackerController() {


    var myCreeps = getObjectsByPrototype(Creep).filter(creep => creep.my);
    var enemyCreep = getObjectsByPrototype(StructureSpawn).find(creep => !creep.my);
    for (var creep of myCreeps) {
        if (creep.body.some(bodyPart => bodyPart.type === ATTACK)) {
            if (creep.attack(enemyCreep) === ERR_NOT_IN_RANGE) {
                creep.moveTo(enemyCreep);
                creep.attack(enemyCreep);
            }
        }
    }
}