import { Component, OnInit } from '@angular/core';
import { Server } from 'selenium-webdriver/safari';

@Component({
  selector: 'app-servers',
  // templateUrl: './servers.component.html', (external file, if more than 3 lines html code)
  template: `
  <app-server></app-server>
  <app-server></app-server>`,//change to template (each component need to have a template)
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
