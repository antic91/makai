import { trigger, transition, useAnimation } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { slideAnim } from 'src/app/animations/animations';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css'],
  animations: [
    trigger('slideAnim', [
      transition(':leave', [
        useAnimation(slideAnim, {
          params: {
            opacity1: 1,
            opacity2: 1,
            translate1: '0',
            translate2: '0',
            translate3: '0',
            translate4: '100%',
            translate5: '0',
            translate6: '0',
            time: '1400ms ease-out',
            translateValue: 'translate3d',
            translateValue1: 'translate3d'
          }
        })
      ])
    ]),
    trigger('slideAnimA', [
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
            time: '1300ms ease-out',
            translateValue: 'translate3d',
            translateValue1: 'translate3d'
          }
        })
      ])
    ])
  ]
})
export class NewsletterComponent implements OnInit {

  @Input("news") disappear!: boolean;
  @Input("appear") appear!: boolean;
  constructor() { }

  ngOnInit(): void {

  }


}
