import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-attempt-config',
  templateUrl: './attempt-config.component.html',
  styleUrls: ['./attempt-config.component.css']
})
export class AttemptConfigComponent  {

   @Output() maxAttemptsChange = new EventEmitter<number>();

  attemptOptions: number[] = [5, 10, 15, 20];
  selected: number = 10;

  onSelectionChange() {
    this.maxAttemptsChange.emit(this.selected);
  }

}
