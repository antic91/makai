import { trigger, state, style, transition, animate, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { fadeIn } from 'src/app/animations/animations';

@Component({
  selector: 'app-smaller',
  templateUrl: './smaller.component.html',
  styleUrls: ['./smaller.component.css'],
  animations: [
    trigger('rotatedState', [
          state('default', style({ transform: 'rotate(0)' })),
          state('rotated', style({ transform: 'rotate(45deg)' })),
          transition('rotated => default', animate('400ms ease-out')),
          transition('default => rotated', animate('400ms ease-in'))
    ]),
    trigger('rotatedStateSec', [
          state('default', style({ transform: 'rotate(0)' })),
          state('rotated', style({ transform: 'rotate(-45deg)' })),
          transition('rotated => default', animate('400ms ease-out')),
          transition('default => rotated', animate('400ms ease-in'))
    ]),
    trigger("fadeOut", [
      transition(":enter", [
        useAnimation(fadeIn, {
          params: {
            Value: 0,
            Value1: 1,
            time:"400ms ease-in"
          }
        })
      ]),transition(":leave", [
        useAnimation(fadeIn, {
          params: {
            Value: 1,
            Value1: 0,
            time:"400ms ease-in"
          }
        })
      ])
    ])
  ]
})
export class SmallerComponent implements OnInit {
  displayX: boolean = true;
  constructor() { }
  ngOnInit(): void {
  }
  changeDisplay(): void{
    this.displayX = !this.displayX;
  }
}
