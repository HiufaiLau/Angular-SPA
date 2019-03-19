import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alternative',
  templateUrl: './alternative.component.html',
  // 
  styles:[`
  .white-text{
      color:white;
  }
`]
})
export class AlternativeComponent implements OnInit {
  showDetail = false;
  display = false;
  text: string = 'Today is sunny!';
  log=[];

  constructor() { }
  
  onDisplay(){
    this.showDetail=!this.showDetail;
    // this.log.push(this.log.length + 1);
    this.log.push(new Date());

  }

  outputText(){
  this.text ;
  }
  
  ngOnInit() {
  }

}
