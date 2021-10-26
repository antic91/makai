import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { hover, hoverBlue } from 'src/app/animations/animations';

@Component({
  selector: 'app-shop-one',
  templateUrl: './shop-one.component.html',
  styleUrls: ['./shop-one.component.css'],
  animations: [
    hover.animeTrigger,
    hoverBlue.animeTrigger
  ]
})
export class ShopComponent1 implements OnInit {

  hoverMan: boolean = false;

  hoverWoman: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  changeHover(a:string): void{
    if (a == "man") this.hoverMan = true;
    if (a == "woman") this.hoverWoman = true;
  }
  reverse(b:string): void{
    if (b == "man") this.hoverMan = false;
    if (b == "woman") this.hoverWoman = false;
  }

}
