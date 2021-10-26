import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { fadeIn, slideAnim } from 'src/app/animations/animations';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css'],
  animations: [
    trigger("fadeInOut", [
      transition(":enter", [
        useAnimation(fadeIn, {
          params: {
            Value: 0,
            Value1: 1,
            time: "400ms cubic-bezier(.5,.27,.73,.97)"
          }
        })
      ]),
      transition(":leave", [
        useAnimation(fadeIn, {
          params: {
            Value: 1,
            Value1: 0,
            time: "200ms cubic-bezier(.5,.27,.73,.97)"
          }
        })
      ])
    ]),
    trigger('textSlideAnim', [
      transition(':enter', [
        useAnimation(slideAnim, {
          params: {
            opacity1: 0,
            opacity2: 1,
            translate1: '0',
            translate2: '40%',
            translate3: '0',
            translate4: '0',
            translate5: '0',
            translate6: '0',
            time: '300ms ease-in',
            translateValue: 'translate3d',
            translateValue1: 'translate3d'
          }
        })
      ])
    ]),
    trigger('slideAnim', [
      transition(':enter', [
        useAnimation(slideAnim, {
          params: {
            opacity1: 0,
            opacity2: 1,
            translate1: '-100%',
            translate2: '0',
            translate3: '0',
            translate4: '0',
            translate5: '0',
            translate6: '0',
            time: '300ms ease-in',
            translateValue: 'translate3d',
            translateValue1: 'translate3d'
          }
        })
      ])
    ])
  ]
})
export class PhotosComponent implements OnInit {
  @Input("headPhoto") headPhoto!: string;
  @Input("headerPhoto") headerPhoto!: string;
  @Input("photos") photos!: any[];

  displayHead: boolean = true;
  displayOne: boolean = false;
  displayTwo: boolean = false;
  displayThree: boolean = false;
  displayFour: boolean = false;

  displayPhoto: boolean = false;
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.displayPhoto = true;
    }, 1000);
  }
  mouseOver(i:number): void{
    if (i == 0) this.displayOne = true;
    if (i == 1) this.displayTwo = true;
    if (i == 2) this.displayThree = true;
    if (i == 3) this.displayFour = true;
    this.displayHead = false
  }
  mouseLeave(i:number): void{
    this.displayHead = true;
    if (i == 0) this.displayOne = false;
    if (i == 1) this.displayTwo = false;
    if (i == 2) this.displayThree = false;
    if (i == 3) this.displayFour = false;
  }
}
