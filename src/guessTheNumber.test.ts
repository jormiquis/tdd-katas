import { describe, it, expect } from 'vitest';
import { GuessingNumberGame } from './guessTheNumber';
import { RandomNumberGenerator } from './RandomNumberGenerator';

class TestRandomNumberGenerator implements RandomNumberGenerator {
  generate(): number {
    return 6;
  }

}

describe('Guess the number', () => {
  it('should print success message when guessed number matches generated one', () => {
    const generator : TestRandomNumberGenerator = new TestRandomNumberGenerator();

    const game: GuessingNumberGame = new GuessingNumberGame(generator);
    const playString: string = game.guessNumber(6);

    expect(playString).toBe('You have won!');
  });
});