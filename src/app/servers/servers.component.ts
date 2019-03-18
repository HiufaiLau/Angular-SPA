import { Component, OnInit } from '@angular/core';
import { Server } from 'selenium-webdriver/safari';

@Component({
  selector: '.app-servers',//selected by class
  // selector: '[app-servers]',//put the [] to use attribute selector , you can select element by attribute in CSS
  templateUrl: './servers.component.html',
  //(external file, if more than 3 lines html code)
  // template: `
  // <app-server></app-server>
  // <app-alternative></app-alternative>`,//change to template (each component need to have a template)
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverCreationStatus = 'No server is created';
  allowNewServer = false;
  name = 'TestServer';
  username = '';
  serverCreated = false;

    constructor() {
  setTimeout(() => {
    this.allowNewServer = true;
  }, 2000);
}

ngOnInit() {
}

onCreateServer() {
  this.serverCreated = true;
  this.serverCreationStatus = "Server is created ! Name is " + this.name + ".";
}

onUpdateServerName(event: any) {
  console.log(event);
}
}
