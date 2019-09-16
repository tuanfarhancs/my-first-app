import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-servers',
  // selector: '[app-servers]',
  selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No Server was Created"
  ServerName = 'Input Here';
  serverCreated = false;
  servers = ['Testserver','Testserver 2'];

  constructor() { 
    setTimeout(() => {this.allowNewServer = true},2000)
  }

  ngOnInit() {
  }

  onServerCreated(){

    this.serverCreated = true;
    this.servers.push(this.ServerName)
    this.serverCreationStatus = "Server was Created, name of the Server is " + this.ServerName;
    
  }

  onUpdateServerName(event: any){
    this.ServerName = (<HTMLInputElement>event.target).value;
  }
}
