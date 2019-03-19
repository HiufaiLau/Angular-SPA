import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alternative',
  templateUrl: './alternative.component.html',
  styleUrls: ['./alternative.component.css']
})
export class AlternativeComponent implements OnInit {
  showDetail = false;
  display = false;
  text: string = 'Today is sunny.';
  log=[];

  constructor() { }
  
  onDisplay(){
    this.display=!this.display;
    this.log.push(this.log.length + 1);
  }

  outputText(){
  this.text ;
  }
  
  ngOnInit() {
  }

}
