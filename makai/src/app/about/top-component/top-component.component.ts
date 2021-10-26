import { animate, state, style, transition, trigger, useAnimation } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { rotate, slideAnim } from 'src/app/animations/animations';

@Component({
  selector: 'app-top-component',
  templateUrl: './top-component.component.html',
  styleUrls: ['./top-component.component.css'],
  animations: [
    trigger('slideInBottom', [
      transition(':enter', [
        useAnimation(rotate, {
          params: {
            opacity1: 0,
            opacity2: 1,
            translate1: '1',
            translate2: '1',
            translate3: '1',
            translate4: '5deg',
            translate5: '0',
            translate6: '0',
            translate7: '0',
            translate8: '0',
            translate9: '30%',
            translate10: '0',
            time: '400ms ease-in',
            translateValue: 'rotate3d',
            translateValue1: 'translate3d'
          }
        })
      ])
    ]),

    trigger('SlideInLeft', [
      transition(':enter', [
        useAnimation(slideAnim, {
          params: {
            opacity1: 1,
            opacity2: 1,
            translate1: '-100%',
            translate2: '0',
            translate3: '0',
            translate4: '0',
            translate5: '0',
            translate6: '0',
            time: '1200ms ease-in-out',
            translateValue: 'translate3d',
            translateValue1: 'translate3d'
          }
        })
      ])
    ]),
    trigger("ScaleOut", [
    state('begin', style({transform: 'scale(1)'})),
      state('end', style({ transform: 'scale(1.25)' })),
      transition('begin => end', [
        animate(200)
      ]),
      transition('end => begin', [
        animate(200)
      ])
    ])

  ]
})
export class TopComponentComponent implements OnInit {
  left: boolean = false;
  imageShow: boolean = false;

  @Input("scaleTop") scaleTop!: boolean;
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.left = true;
      this.imageShow = true;
    }, 1100);
  }

}
