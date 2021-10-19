import { trigger, transition, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { hover, hoverBlue, slideAnim } from 'src/app/animations/animations';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.css'],
  animations: [
    hover.animeTrigger,
    hoverBlue.animeTrigger,
    trigger("slideAnim", [
      transition(":enter", [
        useAnimation(slideAnim, {
          params: {
            opacity1: 0,
            opacity2: 1,
            time: "1000ms ease-in-out",
            translateValue:"translate3d",
            translateValue1:"translate3d",
            translate1:"0",
            translate2:"-20%",
            translate3:"0",
            translate4:"0",
            translate5:"0",
            translate6:"0"
          }
        })
      ])
    ])
  ]
})
export class DropDownComponent implements OnInit {
  displayMan1: boolean = false;
  displayMan2: boolean = false;
  displayMan3: boolean = false;

  displayWoman1: boolean = false;
  displayWoman2: boolean = false;
  displayWoman3: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  changeHover(value: string): void{
    console.log(value)
    if(value=="man1") this.displayMan1 = true
    if(value=="man2") this.displayMan2 = true
    if (value == "man3") this.displayMan3 = true

    if(value=="woman1") this.displayWoman1 = true
    if(value=="woman2") this.displayWoman2 = true
    if (value == "woman3") this.displayWoman3 = true
  }
  reverse(value:string): void{
    this.displayMan1 = false;
    this.displayMan2 = false;
    this.displayMan3 = false;
    this.displayWoman1 = false;
    this.displayWoman2 = false;
    this.displayWoman3 = false;
  }
}
