import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { rotate } from 'src/app/animations/animations';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css'],
  animations: [
    trigger('rotate', [
      transition(':enter', [
        useAnimation(rotate, {
          params: {
            opacity1: 0,
            opacity2: 1,
            translate1: '0',
            translate2: '0',
            translate3: '1',
            translate4: '5deg',
            translate5: '0',
            translate6: '0',
            translate7: '0',
            translate8: '0',
            translate9: '30%',
            translate10: '0',
            time: '600ms ease-in',
            translateValue: 'rotate3d',
            translateValue1: 'translate3d'
          }
        })
      ])
    ])
  ]
})
export class HeadingComponent implements OnInit {
  @Input("displayHead") displayHead!: boolean;
  @Input("displaySpan") displaySpan!: boolean;

  @Input("textHead")textHead!: string;
  @Input("textSpan")textSpan!: string;
  @Input("textHead1")textHead1!: string;
  @Input("textHead2")textHead2!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
