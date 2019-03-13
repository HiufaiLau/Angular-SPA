import { Component } from '@angular/core';

@Component({
    selector:'app-server',
    templateUrl:'./server.component.html'
})
export class ServerComponent{
    //String interpellation
    // assigning the type with typescript
    serverId : number = 10; 
    serverStatus0 : string = 'offline';
    serverStatus1 : string = 'online';

    //define a method in typescript
    //return a string at the end
    getServerStatus(){
        return this.serverStatus0;
    }
}