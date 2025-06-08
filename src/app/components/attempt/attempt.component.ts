import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Attempt } from 'src/app/models/entities/Attempt';
import { Color } from 'src/app/models/entities/Color';

@Component({
  selector: 'app-attempt',
  templateUrl: './attempt.component.html',
  styleUrls: ['./attempt.component.css']
})
export class AttemptComponent {
  @Input() attemptIndex!: number;
  @Input() currentAttemptIndex!: number;
  @Input() positions!: number[];
  @Input() currentColors!: string[];
  @Input() availableColors!: Color;
  @Input() attemptData!: Attempt | undefined;

  @Output() validate = new EventEmitter<void>();


  onValidate() {
    this.validate.emit();
  }

  getFeedbackColors(result: { correctPosition: number, correctColor: number }): string[] {
    const feedback: string[] = [];
    for (let i = 0; i < result.correctPosition; i++) feedback.push('red');
    for (let i = 0; i < result.correctColor; i++) feedback.push('green');
    while (feedback.length < this.positions.length) feedback.push('white');
    return feedback;
  }
}
