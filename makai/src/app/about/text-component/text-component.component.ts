import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit, Input } from '@angular/core';
import { rotate } from 'src/app/animations/animations';

@Component({
  selector: 'app-text-component',
  templateUrl: './text-component.component.html',
  styleUrls: ['./text-component.component.css'],
  animations: [
    trigger('showFromBottom', [
      transition(':enter', [
        useAnimation(rotate, {
          params: {
            opacity1: 0,
            opacity2: 1,
            translate1: '1',
            translate2: '1',
            translate3: '1',
            translate4: '3deg',
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
export class TextComponentComponent implements OnInit {
  @Input("textPos") textPos!: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
