import {Enemyanalyzer} from "./EnemyAnalyzer.mjs";
import {TroopAnalyzer} from "./TroopAnalyzer.mjs";


export class PriorityService {
    troopanalyzer;
    enemyAnalyzer
    myTroop;
    enemyTroop;


    constructor() {
        this.troopanalyzer = new TroopAnalyzer()
        this.enemyAnalyzer = new Enemyanalyzer()
        this.myTroop = new Troop(this.troopanalyzer.CountHealers(),this.troopanalyzer.CountAttacker(),this.troopanalyzer.CountWorkers())
        this.enemyTroop = new Troop(this.en.CountHealers(),this.enemyAnalyzer.CountAttacker(),this.enemyAnalyzer.CountWorkers())
    };


}







