import { describe, it, expect } from 'vitest';
import { GuessingNumberGame } from './GuessingNumberGame';
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

  it('should print a message of number is greater if number is lower and then correct number is winner', () => {
    const generator : TestRandomNumberGenerator = new TestRandomNumberGenerator();

    const game: GuessingNumberGame = new GuessingNumberGame(generator);

    let playString: string = game.guessNumber(4);
    expect(playString).toBe('number is higher!');

    playString = game.guessNumber(4);
    expect(playString).toBe('number is higher!');
  });
});