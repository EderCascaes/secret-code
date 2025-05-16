import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-restart',
  templateUrl: './button-restart.component.html',
  styleUrls: ['./button-restart.component.css']
})
export class ButtonRestartComponent implements OnInit {
  
   @Output() buttonClicked = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  clicke(){
    this.buttonClicked.emit();
  }


}
