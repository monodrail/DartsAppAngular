import { Game } from "./Game";
import { Player } from "./Player";
import { Leg } from "./Leg";

export interface Set {
    setID: number,
    gameID: number,
    game: Game,
    winnerID: number,
    winner: Player,
    legs: Array<Leg>
}