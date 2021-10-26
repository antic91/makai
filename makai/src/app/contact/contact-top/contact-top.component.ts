import { trigger, transition, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { slideAnim, rotate } from 'src/app/animations/animations';

@Component({
  selector: 'app-contact-top',
  templateUrl: './contact-top.component.html',
  styleUrls: ['./contact-top.component.css'],
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
    ])
  ]
})
export class ContactTopComponent implements OnInit {
  left: boolean = false;
  imageShow: boolean = false;
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.left = true;
      this.imageShow = true;
    }, 1100);
  }

}
