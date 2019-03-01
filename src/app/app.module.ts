import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';//ngModule decorator
import {FormsModule} from '@angular/forms'; //this is a typescript feature, for tepyscript to know where the things are.
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';//where to find this class

@NgModule({
  //ngModule decorator
  // this is a feature understood by Angular since it's part of an Angular module.
  //there are 4 properties that we set up to pass ngModule
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,//tells Angular that to import some form features.
  ],
  providers: [],
  bootstrap: [AppComponent]//telling angular which component should you be aware of at the point of time the whole application starts. 
  //which component you would basically recognize in the index.html file.
})
export class AppModule { }//empty typescript class
