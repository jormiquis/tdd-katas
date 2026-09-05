import { RandomNumberGenerator } from "./RandomNumberGenerator";

export class GuessingNumberGame {

    constructor(private generator : RandomNumberGenerator) {}

    public guessNumber(guessedNumber : number) : string {
        return 'You have won!';
    }
}