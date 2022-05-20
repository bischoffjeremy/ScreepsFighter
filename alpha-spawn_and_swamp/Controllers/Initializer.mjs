import {getObjectsByPrototype} from "game/utils";
import {StructureSpawn} from "game/prototypes";
import {ATTACK, CARRY, HEAL, MOVE, WORK} from "game/constants";
import {getStructureSpawnEnergy} from "../Services/EnergyService.mjs";

export function AttackerInitializer() {

    let cost = 300;
    let maximalAmount = Math.floor(getStructureSpawnEnergy() / cost);
    if (maximalAmount >= 1) {
        for (let i = 0; i < maximalAmount; i++) {
            var mySpawn = getObjectsByPrototype(StructureSpawn).find(i => i.my);
            mySpawn.spawnCreep([MOVE, MOVE, ATTACK,]).object;
        }
    }
}

export function HealerInitializer() {
    let cost = 300;
    let maximalAmount = Math.floor(getStructureSpawnEnergy() / cost);
    if (maximalAmount >= 1) {
        for (let i = 0; i < maximalAmount; i++) {
            var mySpawn = getObjectsByPrototype(StructureSpawn).find(i => i.my);
            mySpawn.spawnCreep([MOVE, HEAL,]).object;
        }
    }
}

export function WorkerInitializer() {
    let cost = 150;
    let maximalAmount = Math.floor(getStructureSpawnEnergy() / cost);
    if (maximalAmount >= 1) {
        for (let i = 0; i < maximalAmount; i++) {
            var mySpawn = getObjectsByPrototype(StructureSpawn).find(i => i.my);
            mySpawn.spawnCreep([MOVE, WORK, CARRY, CARRY, CARRY]).object;

        }
    }
}
