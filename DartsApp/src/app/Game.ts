import { Player } from './Player';
import { Set } from './Set';

export interface Game {
    gameID: number,
    player1ID: number,
    player1: Player,
    player2ID: number,
    player2: Player,
    winnerID: number,
    winner: Player,
    numberOfSets: number,
    numberOfLegs: number,
    gameDateTime: string,
    sets: Set[]
}