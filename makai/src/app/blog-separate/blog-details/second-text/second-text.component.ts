import { trigger, transition, useAnimation } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { rotate } from 'src/app/animations/animations';

@Component({
  selector: 'app-second-text',
  templateUrl: './second-text.component.html',
  styleUrls: ['./second-text.component.css'],
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
export class SecondTextComponent implements OnInit {
  @Input("object") object: any = {};
  @Input("showSecText") showSecText!: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
