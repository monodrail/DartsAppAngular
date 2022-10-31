import { Leg } from "./Leg";
import { Player } from "./Player";
import { Throw } from "./throw";

export interface Turn {
    turnID: number,
    legID: number,
    leg: Leg,
    playerID: number,
    player: Player,
    endScore: number,
    throws: Array<Throw>
}