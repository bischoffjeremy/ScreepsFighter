import {getObjectsByPrototype, findClosestByRange} from 'game/utils';
import {utils, constants, prototypes} from 'game';
import {StructureSpawn, Creep, StructureContainer} from 'game/prototypes';
import {ERR_NOT_IN_RANGE, WORK, ATTACK, CARRY, RANGED_ATTACK, HEAL, MOVE, RESOURCE_ENERGY} from 'game/constants';
import {ProportionController} from "./Controllers/Proportioncontroller.mjs";
import {AttackerController} from "./Controllers/AttackerController.mjs";
import {HealerController} from "./Controllers/HealerController.mjs";
import {WorkerController} from "./Controllers/WorkerController.mjs";

export function loop() {
    let a = new Run();
    a.main();
}

class Run {

    constructor() {
    };

    main() {
        ProportionController();
        this.TroopMotions();
    }

    TroopMotions() {
        AttackerController()
        HealerController()
        WorkerController()
    }





}



