import { Component, OnInit } from '@angular/core';
import { More } from 'src/assets/json/More';
import { Mint2Service } from '../mint2/mint2.service';
import { More as m } from '../models/more';
@Component({
  selector: 'app-landing2',
  templateUrl: './landing2.component.html',
  styleUrls: ['./landing2.component.css']
})
export class Landing2Component implements OnInit {

  selected_party: any = "lp"
  party_data: any;
  dataExist:boolean = false;

  constructor(
    private mint2Service:Mint2Service
  ) { }

  ngOnInit(): void {
    this.selected_party = this.mint2Service.getParty;
    const keytype = this.selected_party as keyof typeof More;
    const value = More[keytype];
    if(value){
      this.dataExist=true;
    }
    this.party_data = new m(
            value.party_name,
            value.candidate,
            value.image,
            value.bio,
            value.intro,
            value.education,
            value.prev_position,
            value.member_pa,
            value.member_fg,
            value.awards,
            value.intro_of_const,
            value.fund_achiement
          );
  }



}
