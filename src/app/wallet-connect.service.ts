import { Injectable } from '@angular/core';
import CoinbaseWalletSDK from '@coinbase/wallet-sdk';
import WalletConnectProvider from '@walletconnect/web3-provider';
// import NFT1155ABI from 'HardHatTypeScript/artifacts/contracts/BENC/BENC.sol/BENC.json';
import { BigNumber, ethers } from "ethers";
import { formatEther, parseEther } from 'ethers/lib/utils';
import Web3Modal from "web3modal";
// import { formatEther, parseEther } from 'HardHatTypeScript/node_modulesx/@ethersproject/units/lib';
// import { cons } from 'HardHatTypeScript/node_modulesx/fp-ts/es6/NonEmptyArray2v';


export class ServiceError extends Error {

  constructor(msg: string) {
    super(msg);


    // Set the prototype explicitly.
    Object.setPrototypeOf(this, ServiceError.prototype);
  }

  msg() {
    return super.message;
  }


}



@Injectable({
  providedIn: 'root'
})

export class WalletConnectService {
  web3Modal!: any;
  signer!: ethers.providers.JsonRpcSigner;
  connected = 0;
  contractAddress!: string;
  price!: string;
  contract: any;
  maxSupply: any;
  mintedAmount: any;
  timestamp!: BigNumber;
  eventDate!: string;
  countDownTime!: string;
  days!: number;
  hours!: number;
  minutes!: number;
  seconds!: number;
  tokenID: any;
  tokenID2: any;
  tokenID1: any;



  constructor() {




    const providerOptions = {

      walletconnect: {
        package: WalletConnectProvider, // required
        display: {
          name: "Mobile",
          description: "Scan QR code to connect"
        },
        options: {
          rpc: {
            56: 'https://data-seed-prebsc-1-s1.binance.org:8545/'
            //  56: 'https://bsc-dataseed.binance.org/'
          },
          network: 'binance',
          chainId: 56,
          infuraId: "c577bbb29ca6432f8e0f88d882455857",
        }

      },

    };




    this.web3Modal = new Web3Modal({
      network: "mainnet", // optional
      cacheProvider: true, // optional
      providerOptions,//:providerOptions, // required
      theme: {
        background: "rgb(39, 49, 56)",
        main: "rgb(199, 199, 199)",
        secondary: "rgb(136, 136, 136)",
        border: "rgba(195, 195, 195, 0.14)",
        hover: "rgb(16, 26, 32)"
      }
    });






  }

  require(condition: boolean, message?: string) {
    const error = message == undefined ? "WalletConnect Service :Execution Reverted" : message;

    if (!condition) {
      console.error(error);
      const serviceError = new ServiceError(error);
      throw serviceError;
    }
  }

  async webConnect(providerName: string) {
    try {


      let provider: any;
      let instance: any;
      if (providerName == "metamask") {
        instance = window.ethereum;
        // await instance.enable();
        //provider = new ethers.providers.Web3Provider(instance,"any");

      }


      if (providerName == "walletconnect") {
        instance = new WalletConnectProvider({
          rpc: {
            56: 'https://data-seed-prebsc-1-s1.binance.org:8545/'
            //  56: 'https://bsc-dataseed.binance.org/'
          },
          chainId: 56,
          infuraId: "c577bbb29ca6432f8e0f88d882455857",

          qrcodeModalOptions: {
            mobileLinks: [
              "rainbow",
              "metamask",
              "argent",
              "trust",
              "imtoken",
              "pillar",
            ],
          },
        });



      }
      await instance.enable();
      provider = new ethers.providers.Web3Provider(instance);


      this.signer = provider.getSigner();
      const address = await this.signer.getAddress();
      console.log(address);
      this.connected = 1
      return { "value": 1 };

    }
    catch (error) {
      alert(error);
      this.connected = 0;
      return { "value": 0 };

    }


  }

  selectContract(contractFlag: number) {
    const Metaverse_Room = "0x3Bf81662dD95b3411b753e111E24077F0Ad70934"
    
    const Blockchain_Art_Tech_2022 = "0x239798318DbA0BAB3d5D6cE31B0d4fd5bE5D2da9"

    const BNUG_Exclusive_NFT = "0x1C1fe75C105D34105Bd4A1a9249d7BdFe293E23d"

    const Blockchain_Networking = "0x6167Dc2759B4ea90b58b023BC14aB69d8FCc0996"
  
    const Conference_Goodies = "0xB7cb749c74B34D5DB929645CA414006253B46037"
  
    const Immerse_Dubai = "0xeE8eb61EF437e00d08FE1bBE0CebFA7Eb957bd31"
  
    const BNUG_HOODIES_1 = "0xd8D434c071C45DA69677F00080F073cB5D2C7E0F"
  
    const BNUG_HOODIES_2 = "0x610BfcD4Fe810041Ae10388DB7cC018a01740EaE"
  
    const BNUG_HOODIES_3 = "0x37FD920be7577Fc04028d59e1EF5d4b543366F86"
  
    const BNUG_HOODIES_4 = "0xAbFd67CF5699c4f7e9fC2F977E8e2caB946Afd3d"
  
    const BNUG_HOODIES_5 = "0x0DEC8CF1c37664F2ACd3F864D3f429Ce879D5Fbd"
   

    switch (contractFlag) {
      case 0: this.contractAddress = Metaverse_Room; break;
      case 1: this.contractAddress = Blockchain_Art_Tech_2022; break;
      case 2: this.contractAddress = BNUG_Exclusive_NFT; break;
      case 3: this.contractAddress = Blockchain_Networking; break;
      case 4: this.contractAddress = Conference_Goodies; break;
      case 5: this.contractAddress = Immerse_Dubai; break;

      case 6: this.contractAddress = BNUG_HOODIES_1; break;
      case 7: this.contractAddress = BNUG_HOODIES_2; break;
      case 8: this.contractAddress = BNUG_HOODIES_3; break;
      case 9: this.contractAddress = BNUG_HOODIES_4; break;
      case 10: this.contractAddress = BNUG_HOODIES_5; break;



    }


    setInterval(() => {

      if (this.connected == 1) { this.getNFTProperty().then(); }

    }, 1000)

  }


  async getNFTProperty() {
    // this.contract = new ethers.Contract(this.contractAddress, NFT1155ABI.abi, this.signer);
    this.price = formatEther(BigNumber.from(await this.contract.price())).toString();
    this.maxSupply = await this.contract.maxSupply();
    this.tokenID1 = await this.contract.tokenID_1();
    this.tokenID2 = await this.contract.tokenID_2();
    this.mintedAmount = await this.contract.mintCounter();
    const timestamp = BigNumber.from(await this.contract.saleExpiredDate()).mul(1000);
    this.eventDate = BigNumber.from(await this.contract.saleExpiredDate()).mul(1000).toString();
    const x = BigNumber.from(new Date().getTime());
    const distance = timestamp.sub(x);
    const _second = BigNumber.from(1000);
    const _minute = _second.mul(60);
    const _hour = _minute.mul(60);
    const _day = _hour.mul(24);
    //  const timer;
    if (distance.isZero()) {

      //clearInterval(timer);

      //  (<HTMLInputElement>document.getElementById("countdown")).innerHTML ="Expired!";
      this.days = this.hours = this.minutes = this.seconds = 0;
      return;
    }

    this.days = Math.floor(distance.div(_day).toNumber());
    this.hours = Math.floor((distance.mod(_day)).div(_hour).toNumber());
    this.minutes = Math.floor(distance.mod(_hour).div(_minute).toNumber());
    this.seconds = Math.floor(distance.mod(_minute).div(_second).toNumber());

    /* (<HTMLInputElement>document.getElementById("countdown")).innerHTML =this.days + 'days ';
     (<HTMLInputElement>document.getElementById("countdown")).innerHTML = this.hours + 'hrs ';
     (<HTMLInputElement>document.getElementById("countdown")).innerHTML =this.minutes + 'mins ';
     (<HTMLInputElement>document.getElementById("countdown")).innerHTML =this.seconds + 'secs';*/









  }

  async MintImmerse(quantity: BigNumber) {
    try {
      const totalPrice = { value: BigNumber.from(parseEther(this.price).mul(quantity)) };
      const x = await this.contract.mintNFT(quantity,"xx","xx", totalPrice);
      this.connected = 2

      //const y = await this.contract.transferBNB(); 
    }
    catch (error: any) {
      this.connected = 1;
     // alert(error.data.message);
      console.log(error);
    }




  }
}
