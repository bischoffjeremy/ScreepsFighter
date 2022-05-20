import {getObjectsByPrototype} from "game/utils";
import {Creep} from "game/prototypes";
import {ATTACK, HEAL, WORK} from "game/constants";
import {HealerInitializer,WorkerInitializer,AttackerInitializer} from "./Initializer.mjs";

export function ProportionController() {

    let proportion = 0.3
    let myAttackerCount = getObjectsByPrototype(Creep).filter(creep => creep.my).filter(creep => creep.body.some(bodyPart => bodyPart.type === ATTACK)).length;
    let myHealersCount = getObjectsByPrototype(Creep).filter(creep => creep.my).filter(creep => creep.body.some(bodyPart => bodyPart.type === HEAL)).length;
    let myWorkersCount = getObjectsByPrototype(Creep).filter(creep => creep.my).filter(creep => creep.body.some(bodyPart => bodyPart.type === WORK)).length;
    let total = (myAttackerCount + myHealersCount + myWorkersCount);

    if (total !== 0) {
        let myAttackerCurrentproportion = (100 * myAttackerCount / total);
        let myWorkerCurrentproportion = (100 * myWorkersCount / total);
        let myHealerCurrentproportion = (100 * myHealersCount / total);

        if (myWorkerCurrentproportion < proportion) {
            SpawnController("WORKER");
        } else if (myHealerCurrentproportion < proportion) {
            SpawnController("ATTACKER");
        } else if (myAttackerCurrentproportion < proportion) {
            SpawnController("ATTACKER");
        }
    } else {
        SpawnController("WORKER");
    }
}


function SpawnController(spawnType) {
    if (spawnType === "HEALER") {
        HealerInitializer()
    }
    if (spawnType === "WORKER") {
        WorkerInitializer()
    }
    if (spawnType === "ATTACKER") {
        AttackerInitializer()
    }
}