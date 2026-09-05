import { RandomNumberGenerator } from "./RandomNumberGenerator";

export class GuessingNumberGame {

    constructor(private generator : RandomNumberGenerator) {}

    public guessNumber(guessedNumber : number) : string {
        const randomNumber = this.generator.generate();

        if (guessedNumber === randomNumber) return 'You have won!';

        if (guessedNumber < randomNumber) return 'number is higher!';

        return '';
    }
}