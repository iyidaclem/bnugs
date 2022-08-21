import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Mint2Service {

  currentPary:string = "";

  constructor() { }

  async changeParty(party:string){
    this.currentPary = party;
  }

  get getParty(){
    
    return this.currentPary;

  }
}
