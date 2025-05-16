//type Color = 'vermelho' | 'azul' | 'amarelo' | 'verde';

import { Color } from "./Color";
import { ResultTest } from "./result-text";



export class Attempt {
  guess: Color;
  result: ResultTest;

  constructor(guess: Color, result: ResultTest) {
    this.guess = guess;
    this.result = new ResultTest(result.correctPosition, result.correctColor);
  }
}