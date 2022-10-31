import { Turn } from "./Turn";

export interface Throw {
    throwID: number,
    turnID: number,
    turn: Turn,
    multiplier: string,
    throwScore: number
}