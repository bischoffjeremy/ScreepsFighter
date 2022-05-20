import {AttackerController} from "../Controllers/AttackerController.mjs";
import {TroopAnalyzer} from "./TroopAnalyzer.mjs";
import {Enemyanalyzer} from "./EnemyAnalyzer.mjs";
import {Troop} from "../Models/Troop.mjs";
import {AttackerInitializer} from "../Controllers/Initializer.mjs";


export function AttackService(){

        AttackerInitializer()
        AttackerController()




}