import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { hover, hoverBlue } from 'src/app/animations/animations';

@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
  styleUrls: ['./bag.component.css'],
  animations: [
    hover.animeTrigger,
    hoverBlue.animeTrigger,
  ]
})
export class BagComponent implements OnInit {
  sum!: number;

  hover: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.sum = 0;
  }

  changeHover(): void{
    this.hover = true;
  }
  reverse(): void{
    this.hover = false;
  }
}
