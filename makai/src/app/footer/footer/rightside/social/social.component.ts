import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { hover, hoverBlue } from 'src/app/animations/animations';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css'],
  animations: [
    hover.animeTrigger,
    hoverBlue.animeTrigger
  ]
})
export class SocialComponent implements OnInit {

  hoverFacebook: boolean = false;

  hoverInstagram: boolean = false;

  hoverTwitter: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  changeHover(a:string): void{
    if (a == "facebook") this.hoverFacebook = true;
    if (a == "instagram") this.hoverInstagram = true;
    if (a == "twitter") this.hoverTwitter = true;
  }
  reverse(b:string): void{
    if (b == "facebook") this.hoverFacebook = false;
    if (b == "instagram") this.hoverInstagram = false;
    if (b == "twitter") this.hoverTwitter = false;
  }

}
