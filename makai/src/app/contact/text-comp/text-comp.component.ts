import { trigger, transition, useAnimation } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { rotate } from 'src/app/animations/animations';

@Component({
  selector: 'app-text-comp',
  templateUrl: './text-comp.component.html',
  styleUrls: ['./text-comp.component.css'],
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
    ])
  ]
})
export class TextCompComponent implements OnInit {
  @Input("showText") showText!: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
