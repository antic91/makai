import { trigger, transition, useAnimation } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { slideAnim } from 'src/app/animations/animations';

@Component({
  selector: 'app-last-photo',
  templateUrl: './last-photo.component.html',
  styleUrls: ['./last-photo.component.css'],
  animations: [
    trigger('SlideInTop', [
      transition(':enter', [
        useAnimation(slideAnim, {
          params: {
            opacity1: 0,
            opacity2: 1,
            translate1: '0',
            translate2: '-30%',
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
    ])
  ]
})
export class LastPhotoComponent implements OnInit {
  @Input("object") object: any = {};
  @Input("showlastPhoto") showlastPhoto!: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
