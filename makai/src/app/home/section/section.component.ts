import { trigger, useAnimation, transition } from '@angular/animations';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { slideAnim } from 'src/app/animations/animations';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css'],
  animations: [
    trigger("slideAnim", [
      transition(":enter", [
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
            time: '1000ms ease-in-out',
            translateValue: 'translate3d',
            translateValue1: 'translate3d'
          }
        })
      ])
    ])
  ]
})
export class SectionComponent implements OnInit {

  @Input("display") display!: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
