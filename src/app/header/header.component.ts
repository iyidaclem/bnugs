import { Component, OnInit } from '@angular/core';
import { WalletConnectService } from '../wallet-connect.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public web3Connect:WalletConnectService) { }

  metamaskConnect(){

    this.web3Connect.webConnect("metamask").then(()=>{alert("Wallet Connected")});
  }
  walletconnect(){
    const pr = "walletconnect";
    this.web3Connect.webConnect("walletconnect").then(()=>{alert("Wallet Connected")});

  }

  ngOnInit(): void {
   

  }

}
