import {findClosestByRange, getObjectsByPrototype} from "game/utils";
import {Creep, StructureContainer, StructureSpawn} from "game/prototypes";
import {ERR_NOT_IN_RANGE, RESOURCE_ENERGY, WORK} from "game/constants";

export function WorkerController() {

    let creeps = getObjectsByPrototype(Creep).filter(creep => creep.my).filter(creep => creep.body.some(bodyPart => bodyPart.type === WORK));
    if (creeps) {
        for (var creep of creeps) {
            if (creep.store.getFreeCapacity(RESOURCE_ENERGY) === 0) {

                const spawn = getObjectsByPrototype(StructureSpawn).find(spawn => spawn.my)

                if (spawn.store.getFreeCapacity(RESOURCE_ENERGY) > 0) {

                    if (creep.transfer(spawn, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) creep.moveTo(spawn)
                }

                return
            }

            const containers = getObjectsByPrototype(StructureContainer).filter(container => container.store.getUsedCapacity(RESOURCE_ENERGY) > 0)
            if (!containers.length) return

            const closestContainer = findClosestByRange(creep, containers)

            if (creep.withdraw(closestContainer, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) creep.moveTo(closestContainer)


        }

    }
}