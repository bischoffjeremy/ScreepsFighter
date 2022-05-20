import {getObjectsByPrototype} from "game/utils";
import {constants, prototypes} from "game";

export function getStructureSpawnEnergy() {
    const spawn = getObjectsByPrototype(prototypes.StructureSpawn)[0];
    let energy = spawn.store[constants.RESOURCE_ENERGY]
    return energy
}