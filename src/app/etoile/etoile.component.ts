import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-etoile',
  templateUrl: './etoile.component.html',
  styleUrls: ['./etoile.component.css']
})
export class EtoileComponent implements OnInit {
  @Input() currentRate : number = 0;
  @Output() notify : EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

 onChange(){
    this.notify.emit(this.currentRate)
  }
  

}
