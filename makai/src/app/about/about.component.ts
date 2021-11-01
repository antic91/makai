import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  /*PHOTO Top scale in/out*/
  scaleTop: boolean = false;

  /*Man with board component image size animation*/
  manBoardCompOne: boolean = false;
  manBoardCompTwo: boolean = false;

  /*Text component animation*/
  textPos: boolean = false;

  /*Four sections component*/
  fourSections: boolean = false;

  /*Team section*/
  showTeam: boolean = false;
  showTeam1: boolean = false;
  showTeam2: boolean = false;

  /*Brands animation trigger*/
  showBrands: boolean = false;

  /*PhotoBox animation trigger*/
  showItems: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  /*Detecting top component position and scale photo*/
  detectTopAbout($event: boolean): void{
    this.scaleTop = $event;

  }

  /*Detecting Man with board component position */
  detectManWithBoard($event: { compOne: boolean, compTwo: boolean }): void{
    if(this.manBoardCompOne!=$event.compOne) this.manBoardCompOne = $event.compOne
    if(this.manBoardCompTwo!=$event.compTwo) this.manBoardCompTwo = $event.compTwo
  }

    /*Detecting top component position*/
    detectTextComponent($event: boolean): void{
      this.textPos = true
    }

    /*Detecting Four Section component position*/
    detectFourSection($event: boolean): void{
      this.fourSections = true
    }

  /*DETECTING TEAM CHANGES */
  detectTeamOne($event: boolean): void{
      this.showTeam = $event
    }
    detectTeamTwo($event: boolean): void{
      this.showTeam1 = $event
    }
    detectTeamThree($event: boolean): void{
      this.showTeam2 = $event
    }

  /*Detecting Brands component*/
    detectBrands($event: boolean): void{
      this.showBrands = $event
    }

  /*Detecting PhotoBox component*/
    detectPhotoBox($event: boolean): void{
      this.showItems = $event
    }

}
