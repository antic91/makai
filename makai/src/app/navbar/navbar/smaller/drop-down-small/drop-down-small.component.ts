import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { fadeIn, slideAnim } from 'src/app/animations/animations';

@Component({
  selector: 'app-drop-down-small',
  templateUrl: './drop-down-small.component.html',
  styleUrls: ['./drop-down-small.component.css'],
  animations: [
    trigger("fadeInAnimation", [
      transition(":enter", [
        useAnimation(fadeIn, {
          params: {
            Value: 0,
            Value1: 1,
            time:"4000ms ease-in"
          }
        })
      ])
    ]),
    trigger("slideInTop", [
      transition(":enter", [
        useAnimation(slideAnim, {
          params: {
            opacity1: 0,
            opacity2: 1,
            translate1: '0',
            translate2: '-10%',
            translate3: '0',
            translate4: '0',
            translate5: '0',
            translate6: '0',
            time: '400ms ease-in',
            translateValue: 'translate3d',
            translateValue1: 'translate3d'
          }
        })
      ])
    ])
  ]
})
export class DropDownSmallComponent implements OnInit {
  displaySubLinks: boolean = false;
  @Output("NoDisplay") NoDisplay = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  showSubLinks(): void{
    this.displaySubLinks = !this.displaySubLinks;
  }
  displayNone(): void{
    this.NoDisplay.emit(false)
  }
}
