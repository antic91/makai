import { animate, state, style, transition, trigger, useAnimation } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { slideAnim, transformBottom } from 'src/app/animations/animations';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css'],
  animations: [
    trigger('hover', [
          state('active', style({ top: 0 })),
          state('inactive', style({ top: "-100%" })),
          transition('active <=> inactive', animate('275ms ease-in-out')),
          transition('inactive <=> active', animate('275ms ease-in-out'))
    ])

  ]
})
export class BrandsComponent implements OnInit {
  @Input('width') width!: string;
  @Input('height') height!: string;


  display1: boolean = true;
  display2: boolean = true;
  display3: boolean = true;
  display4: boolean = true;
  display5: boolean = true;
  display6: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }
  /*hover event*/
  change(value: string): void{
    if(value == "display1")this.display1 = false;
    if(value == "display2")this.display2 = false;
    if(value == "display3")this.display3 = false;
    if(value == "display4")this.display4 = false;
    if(value == "display5")this.display5 = false;
    if (value == "display6") this.display6 = false;
  }

  /*mouse out evet*/
  reverse(value: string): void{
    if(value == "display1")this.display1 = true;
    if(value == "display2")this.display2 = true;
    if(value == "display3")this.display3 = true;
    if(value == "display4")this.display4 = true;
    if(value == "display5")this.display5 = true;
    if (value == "display6") this.display6 = true;
  }

}
