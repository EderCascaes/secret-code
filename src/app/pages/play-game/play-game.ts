import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Attempt } from 'src/app/models/entities/Attempt';
import { Color } from 'src/app/models/entities/Color';
import { ResultTest } from 'src/app/models/entities/result-text';


@Component({
  selector: 'app-play-game',
  templateUrl: './play-game.html',
  styleUrls: ['./play-game.css']
})


export class PlayGameComponent implements OnInit {

   sequenceLength: number = 4;
    maxAttempts: number = 10;
    currentAttemptIndex: number = 0;
    gameOver: boolean = false;
    won: boolean = false; 
    showSecret: boolean = false; 
    attempt: Attempt;
    availableColors: Color = new Color([]); 
    secretSequence: Color = new Color([]);
    currentGuess: Color = new Color([]);
    attempts: Attempt[] = [];
    @Output() tentativaFeita = new EventEmitter<string[]>();
    positions: number[] =[]
    primaryColors: string[] = ['vermelho', 'azul', 'amarelo', 'verde'];
    extraColors: string[] = ['marrom', 'roxo', 'preto', 'branco'];
    selectedColorToAdd: string = '';
    selectedColorToRemove: string = '';

    
  constructor(
    private cdRef: ChangeDetectorRef
  ) { 
     this.positions = Array(this.sequenceLength).fill(0).map((_, i) => i);
  }

  ngOnInit() {
    this.availableColors = new Color(['vermelho', 'azul', 'amarelo', 'verde']);  
    this.availableColors = new Color([...this.primaryColors]);  
    this.secretSequence = new Color([]);
    this.currentGuess = new Color([]);
    this.generateSecretSequence();
    this.initGuess();
    this.won = false;
    this.gameOver = false;
  }
  
  get currentColors(): string[] {
  return this.currentGuess.colors;
}

addColor() {
  if (
    this.selectedColorToAdd &&
    !this.availableColors.colors.includes(this.selectedColorToAdd)
  ) {
    this.availableColors.colors.push(this.selectedColorToAdd);
    this.restartGame();
    this.selectedColorToAdd = '';
  }
}

removeColor() {
  const index = this.availableColors.colors.indexOf(this.selectedColorToRemove);
  if (index !== -1) {
    this.availableColors.colors.splice(index, 1);
    this.secretSequence.colors = this.secretSequence.colors.filter(
      color => this.availableColors.colors.includes(color)
    );
    this.restartGame();
    this.selectedColorToRemove = '';
  }
}

get remainingExtraColors(): string[] {
  return this.extraColors.filter(color => !this.availableColors.colors.includes(color));
}

get removableExtraColors(): string[] {
  return this.availableColors.colors.filter(color => !this.primaryColors.includes(color));
}

restartGame() {
  this.gameOver = false;
  this.won = false;
  this.currentAttemptIndex = 0;
  this.attempts = [];
  this.secretSequence = new Color([]);
  this.currentGuess = new Color([]);
  this.generateSecretSequence();
  this.initGuess();
  console.log('Nova sequência secreta (após modificação de cores):', this.secretSequence);
}

 enviarTentativa() {
    this.tentativaFeita.emit(this.currentGuess.colors);
  }

  initGuess() {
    this.currentGuess = new Color([]);
    for (let i = 0; i < this.sequenceLength; i++) {      
      this.currentGuess.addColor(this.availableColors.colors[0]);
    }
  }
  
  generateSecretSequence() {
    this.secretSequence = new Color([]);
    for (let i = 0; i < this.sequenceLength; i++) {
      const randomIndex = Math.floor(Math.random() * this.availableColors.colors.length);
      this.secretSequence.addColor(this.availableColors.colors[randomIndex]);
    }
  }
    

  get allAttempts(): number[] {
    return Array(this.maxAttempts).fill(0).map((_, i) => i);
  }


validateGuess() {
  //debugger
  const result = this.checkAttempt(this.secretSequence, this.currentGuess);
  const guessClone = new Color([...this.currentGuess.colors]); // evita referência

  this.attempts.push(new Attempt(guessClone, result));

  if (result.correctPosition === 4) {
    this.gameOver = true;
    this.won = true;
  } else if (this.attempts.length >= this.maxAttempts) {
    this.gameOver = true;
  } else {
    this.currentAttemptIndex++;
    this.initGuess();
  }

  console.log('attempts', this.attempts);
}



  checkAttempt(secret: Color, guess: Color): ResultTest {
    const secretCopy = [...secret.colors];
    const guessCopy = [...guess.colors];  
    let correctPosition = 0;
    let correctColor = 0;

    // Cores nas posições corretas
    for (let i = 0; i < this.sequenceLength; i++) {
      if (guessCopy[i] === secretCopy[i]) {
        correctPosition++;
        secretCopy[i] = null;
        guessCopy[i] = null;
      }
    }
  
    // Cores corretas em posições erradas
    for (let i = 0; i < guessCopy.length; i++) {
      if (guessCopy[i] !== null) {
        const index = secretCopy.indexOf(guessCopy[i]);
        if (index !== -1) {
          correctColor++;
          secretCopy[index] = null;
        }
      }
    }

    return new ResultTest(correctPosition, correctColor );
  }
  
getFeedbackColors(result: { correctPosition: number, correctColor: number }): string[] {
  const feedback: string[] = [];
    
  for (let i = 0; i < result.correctPosition; i++) {
    feedback.push('red');
  }
  for (let i = 0; i < result.correctColor; i++) {
    feedback.push('green');
  }
  while (feedback.length < this.sequenceLength) {
    feedback.push('white');
  }
  return feedback;
}

updateMaxAttempts(newMax: number) {
  this.maxAttempts = newMax;
  this.restartGame();
}

}
