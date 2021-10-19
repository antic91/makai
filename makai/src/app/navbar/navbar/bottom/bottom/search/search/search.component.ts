import { animate, state, style, transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { fadeUpOnHover, hover, hoverBlue, slideAnim } from 'src/app/animations/animations';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  animations: [
   hover.animeTrigger,
    hoverBlue.animeTrigger,
    trigger("fadeIn", [
      transition(":enter", [
        useAnimation(slideAnim, {
          params: {
            opacity1: 1,
            opacity2: 1,
            time: "500ms ease-in",
            translateValue: "translate3d",
            translate1: "-100%",
            translate2: "0",
            translate3: "0",
            translateValue1: "translate3d",
            translate4: "0",
            translate5: "0",
            translate6: "0",
          }
        })
      ])

    ])
  ]
})
export class SearchComponent implements OnInit {
  isClicked: boolean = false;

  hover: boolean = false;

  constructor() {
  }

  ngOnInit(): void {

  }
  change(): void{
    this.isClicked = !this.isClicked;
  }
  changeHover(): void{
    this.hover = true;
  }
  reverse(): void{
    this.hover = false;
  }
}
