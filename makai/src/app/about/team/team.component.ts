import { trigger, transition, useAnimation } from '@angular/animations';
import { Component, ElementRef, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { fadeIn, rotate } from 'src/app/animations/animations';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
  animations: [
    trigger("hover", [
      transition(":enter", [
        useAnimation(fadeIn, {
          params: {
            Value: 0,
            Value1: 1,
            time: "400ms ease-out"
          }
        })
      ]),
      transition(":leave", [
        useAnimation(fadeIn, {
          params: {
            Value: 1,
            Value1: 0,
            time: "400ms ease-out"
          }
        })
      ])
    ]),
    trigger('showFromBottom', [
      transition(':enter', [
        useAnimation(rotate, {
          params: {
            opacity1: 0,
            opacity2: 1,
            translate1: '1',
            translate2: '1',
            translate3: '1',
            translate4: '4deg',
            translate5: '0',
            translate6: '0',
            translate7: '0',
            translate8: '0',
            translate9: '20%',
            translate10: '0',
            time: '1000ms ease-in-out',
            translateValue: 'rotate3d',
            translateValue1: 'translate3d'
          }
        })
      ])
    ])
  ]
})
export class TeamComponent implements OnInit {
  /*catching width with viewCild*/
  @ViewChild('teamWidth', { read: ElementRef }) teamWidth!: ElementRef;

  img1: boolean = false;
  img2: boolean = false;
  img3: boolean = false;

  @Input("showTeam")showTeam!: boolean;
  @Input("showTeam1")showTeam1!: boolean;
  @Input("showTeam2")showTeam2!: boolean;

  constructor() { }

  ngOnInit(): void {

  }

  mouseOver(event: string): void{
    /*Setting display for bigger screens*/
    if (this.teamWidth.nativeElement.clientWidth > 730) {
      if (event === "img1") this.img1 = true;
      if (event === "img2") this.img2 = true;
      if (event === "img3") this.img3 = true;
    }
  }
  reset(): void{
    if (this.teamWidth.nativeElement.clientWidth > 730) {
      this.img1 = false;
      this.img2 = false;
      this.img3 = false;
    }
  }


  /*Detecting width and setting up display of absolute image  on resize*/
  position($event: any): void{
    if (this.teamWidth.nativeElement.clientWidth > 730) {
      this.img1 = false;
      this.img2 = false;
      this.img3 = false;
    } else {
      this.img1 = true;
      this.img2 = true;
      this.img3 = true;
    }
  }

  /*catch the width to set items all off the time visible when refresh or page init*/
  ngOnChanges(changes: SimpleChanges): void {
    if (this.showTeam == true && this.showTeam1 == true && this.showTeam2== true) {
      if (this.teamWidth.nativeElement.clientWidth <= 730) {
          setTimeout(() => {
            this.img1 = true;
            this.img2 = true;
            this.img3 = true;
          }, 900);
      }
    }
  }
}
