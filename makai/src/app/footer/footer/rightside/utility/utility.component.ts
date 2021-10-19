import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { hover, hoverBlue } from 'src/app/animations/animations';

@Component({
  selector: 'app-utility',
  templateUrl: './utility.component.html',
  styleUrls: ['./utility.component.css'],
  animations: [
    hover.animeTrigger,
    hoverBlue.animeTrigger
  ]
})
export class UtilityComponent implements OnInit {

  hoverPrivacy: boolean = false;

  hoverTerms: boolean = false;

  hoverLicensing: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  changeHover(a:string): void{
    if (a == "privacy") this.hoverPrivacy = true;
    if (a == "terms") this.hoverTerms = true;
    if (a == "licensing") this.hoverLicensing = true;
  }
  reverse(b:string): void{
    if (b == "privacy") this.hoverPrivacy = false;
    if (b == "terms") this.hoverTerms = false;
    if (b == "licensing") this.hoverLicensing = false;
  }

}
