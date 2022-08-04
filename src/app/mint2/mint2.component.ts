import { Component, OnInit } from '@angular/core';
import { BigNumber } from 'ethers';
import { WalletConnectService } from '../wallet-connect.service';

@Component({
  selector: 'app-mint2',
  templateUrl: './mint2.component.html',
  styleUrls: ['./mint2.component.css']
})
export class Mint2Component implements OnInit {
  qty = 0;
  price = 0.15;
  total:string ="0";
  contractFlag: number = 1;
  mintImage!: string;
  description!: string;
  description2!: string;
  DETAILS = "SUPPORT";
  minted!: boolean;
  copied!:boolean;
  currentCandidate:any = {}

  constructor(public wc: WalletConnectService) { }


  

  candidates:any = [
  { name: "Asiwaju Bola Tinubu",
    party: "APC",
    wallet:"0x8b18369cF1A684FC05feB8CF5aCAE43659D9a39a",
    image: 'assets/images/candidates/APC.png'}, 
  { name: "Atiku Abubakar",
    party: "PDP",
    wallet:"0x8b18369cF1A684FC05feB8CF5aCAE43659D9a39a",
    image: 'assets/images/candidates/PDP.png'}, 
  { name: "Peter Obi",
    party: "LP",
    wallet:"0x8b18369cF1A684FC05feB8CF5aCAE43659D9a39a",
    image: 'assets/images/candidates/LP.png'},
  { name: "Prince Malik Ado-Ibrahim",
    party: "YPP",
    wallet:"0x8b18369cF1A684FC05feB8CF5aCAE43659D9a39a",
    image: 'assets/images/candidates/YPP.png'},
  { name: "Rabiu Musa Kwankwaso",
    party: "NNPP",
    wallet:"0x8b18369cF1A684FC05feB8CF5aCAE43659D9a39a",
    image: 'assets/images/candidates/NNPP.png'},
  { name: "Omoyele Sowore",
    party: "AAC",
    wallet:"0x8b18369cF1A684FC05feB8CF5aCAE43659D9a39a",
    image: 'assets/images/candidates/AAC.png'},
  { name: "Prince Adewole Adebayo",
    party: "SDP",
    wallet:"0x8b18369cF1A684FC05feB8CF5aCAE43659D9a39a",
    image: 'assets/images/candidates/SDP.png'},
  { name: "Kola Abiola",
    party: "PRP",
    wallet:"0x8b18369cF1A684FC05feB8CF5aCAE43659D9a39a",
    image: 'assets/images/candidates/PRP.png'}
 
  ]
 
  supportCandidate(c:any){
    this.currentCandidate = c;
    
  }

  copyAddress(wallet:string){
    this.copied = true;
    setTimeout(()=>{
      this.copied = false;
    },2000)
  }

  walletConnect(){
    
  }

  buttonClick_Inc(){
   this.qty = +((<HTMLInputElement>document.getElementById("quantity")).value);
   if(this.qty<3){
   this.qty++;
   } 
   
   this.price = +this.wc.price;
   this.total = (this.qty*this.price).toFixed(2);

  }

  buttonClick_Dec(){
    this.qty = +((<HTMLInputElement>document.getElementById("quantity")).value);
    if(this.qty>0){
      this.qty--
    }
    this.price = +this.wc.price;
    this.total = (this.qty*this.price).toFixed(2);
   

  }

  mintNFT(){
      this.qty = +((<HTMLInputElement>document.getElementById("quantity")).value);
      const b = BigNumber.from(this.qty);
    this.wc.MintImmerse(b).then(()=>{}); 
   
  }

  metamaskConnect(){
  
    this.wc.webConnect("metamask").then((res:any)=>{
     
     if(res.value==1){

      this.wc.getNFTProperty().then(()=>{this.wc.connected=1});
       
      
     }
      
    
    });
  }
  walletconnect(){
    const pr = "walletconnect";
    this.wc.webConnect("walletconnect").then(res=>{      
      if(res.value==1){      
       this.wc.getNFTProperty().then(()=>{ alert("Wallet Connected")});
       
      }     
     });
  }
  player = 0;
  selectPlayer(id:number){
    this.player = id;
  }
  selectContract(flag:number){
    this.contractFlag = flag;
    if(flag==0){ this.mintImage = "assets/images/nft/meta.jpg";
     this.description = "Metaverse Immersive Experience Room"
     this.description2 = "[Play VR Games]"
    }

    if(flag==1){ this.mintImage = "assets/images/nft/conference.jpg";
    this.description = "Conference & Exhibitions "
    this.description2 = "[Blockchain-Art-Tech 2022]"
  }

    if(flag==2){this.mintImage="assets/images/nft/bnugex.jpg" 
    this.description = "all our Events + Android Watch"
    this.description2 = "[BNUG Exclusive NFT]"
  }

    if(flag==3){this.mintImage="assets/images/nft/boat.png"
    this.description = "Networking, Cruise VIP Dinner"
    this.description2 = "[Blockchain Networking]"
  }

    if(flag==4){this.mintImage="assets/images/nft/goodies.jpg"
    this.description = " Conference Goodie Bag"
    this.description2 = "[Conference Goodies]"
  }

    if(flag==5){
      this.mintImage="assets/images/nft/dubai.jpg"
      this.description = "Immerse Dubai | Dubai African"
      this.description2 = "[Dubai African]"
    
  }
  if(flag==6){
    this.mintImage="assets/images/nft/hoodle_1.jpeg"
    this.description = "BNUG HOODIES-1"
      this.description2 = "[WEARABLE NFT]"
}
if(flag==7){
  this.mintImage="assets/images/nft/hoodle_5.jpeg"
  this.description = "BNUG HOODIES-2"
      this.description2 = "[WEARABLE NFT]"

}
if(flag==8){
  this.mintImage="assets/images/nft/hoodle_2.jpeg"
  this.description = "BNUG HOODIES-3"
      this.description2 = "[WEARABLE NFT]"
}
if(flag==9){
  this.mintImage="assets/images/nft/hoodle_3.jpeg"
  this.description = "BNUG HOODIES-4"
  this.description2 = "[WEARABLE NFT]"

}
if(flag==10){
  this.mintImage="assets/images/nft/hoodle_4.jpeg"
  this.description = "BNUG HOODIES-5"
  this.description2 = "[WEARABLE NFT]"

}
  this.wc.connected=0;
  this.wc.tokenID1=null;
  this.wc.tokenID2=null;
  this.wc.selectContract(this.contractFlag);

  


   
  }


  ngOnInit(): void {
  }

}
