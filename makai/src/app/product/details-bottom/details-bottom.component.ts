import { trigger, transition, useAnimation } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { fadeIn } from 'src/app/animations/animations';

@Component({
  selector: 'app-details-bottom',
  templateUrl: './details-bottom.component.html',
  styleUrls: ['./details-bottom.component.css'],
  animations: [
    trigger("fadeInOut", [
      transition(":enter", [
        useAnimation(fadeIn, {
          params: {
            Value: 0,
            Value1: 1,
            time:"400ms ease-in-out"
          }
        })
      ]),
      transition(":leave", [
        useAnimation(fadeIn, {
          params: {
            Value: 1,
            Value1: 0,
            time:"200ms ease-in-out"
          }
        })
      ])
    ])
  ]
})
export class DetailsBottomComponent implements OnInit {
  @Input("product") product: any = {};
  displayColor: boolean = true;
  show1: boolean = true;
  show2: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  clicked(position: string): void{
    if (position == "description") {
      this.displayColor = true;
      this.show1 = true;
      this.show2 = false;
    }
    if (position == "info") {
      this.displayColor = false;
      this.show2 = true;
      this.show1 = false;
    }
  }
}
