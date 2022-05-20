import {Enemyanalyzer} from "./EnemyAnalyzer.mjs";
import {TroopAnalyzer} from "./TroopAnalyzer.mjs";
import {Troop} from "../Models/Troop.mjs";
import {AttackService} from "./AttackService.mjs";
import {DefenseService} from "./DefenseService.mjs";
import {BuildService} from "./BuildService.mjs";
import {WorkerController} from "../Controllers/WorkerController.mjs";


export class PriorityService {
    troopanalyzer;
    enemyAnalyzer
    myTroop;
    enemyTroop;

    defensePriority = false;
    attackPriority  = false;
    workPriority    = false;


    constructor() {
        this.troopanalyzer = new TroopAnalyzer()
        this.enemyAnalyzer = new Enemyanalyzer()
        this.myTroop = new Troop(this.troopanalyzer.CountHealers(), this.troopanalyzer.CountAttacker(), this.troopanalyzer.CountWorkers(), this.troopanalyzer.getEnergyResources(), this.troopanalyzer.getCreeps)
        this.enemyTroop = new Troop(this.enemyAnalyzer.CountHealers(), this.enemyAnalyzer.CountAttacker(), this.enemyAnalyzer.CountWorkers(), this.enemyAnalyzer.getEnergyResources(),this.enemyAnalyzer.getCreeps)
        this.getWorkPriority();
        this.getDefensePriority();
        this.getAttackPriority();
        WorkerController()



    };
    getWorkPriority() {
        if(this.myTroop.buildPoints < this.enemyTroop.buildPoints ||  this.myTroop.defensePoints > 0    ) BuildService()
    }
    getDefensePriority() {
        if(this.myTroop.defensePoints < this.enemyTroop.defensePoints  ||  this.myTroop.defensePoints > 0  ) DefenseService(this.myTroop,this.enemyTroop)
    }

    getAttackPriority() {
        if (this.myTroop.fightPoints > this.enemyTroop.defensePoints ||  this.myTroop.defensePoints > 0  ) AttackService(this.myTroop,this.enemyTroop)
    }




}







