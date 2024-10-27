import {FieldSize} from "./types.ts";

export class snakeSettings {
    fieldSize:FieldSize;
    difficulty:"easy" | "medium" | "hard";
    portals:Boolean;
    conditionWin:number;
    loseOnFieldEdge:Boolean;

    constructor(fieldSize:FieldSize = {width: 10, height: 60}, difficulty:"easy" | "medium" | "hard" = "easy", portals:Boolean = false, conditionWin:number = 10, loseOnFieldEdge:Boolean = false) {
        this.fieldSize = fieldSize;
        this.difficulty = difficulty;
        this.portals = portals;
        this.conditionWin = conditionWin;
        this.loseOnFieldEdge = loseOnFieldEdge;
    }

    getSettings() {
        return this;
    }
}