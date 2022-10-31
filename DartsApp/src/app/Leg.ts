import { Player } from "./Player";
import { Set } from "./Set";
import { Turn } from "./Turn";

export interface Leg {
    legID: number,
    setID: number,
    set: Set,
    startPlayerID: number,
    startPlayer: Player,
    winnerID: number,
    winner: Player,
    turns: Array<Turn>
}