import { trigger, transition, useAnimation } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
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
  img1: boolean = false;
  img2: boolean = false;
  img3: boolean = false;

  @Input("showTeam")showTeam!: boolean;
  @Input("showTeam1")showTeam1!: boolean;
  @Input("showTeam2")showTeam2!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  mouseOver(event:string): void{
    if (event === "img1") this.img1 = true;
    if (event === "img2") this.img2 = true;
    if (event === "img3") this.img3 = true;
  }
  reset(): void{
    this.img1 = false;
    this.img2 = false;
    this.img3 = false;
  }

}
