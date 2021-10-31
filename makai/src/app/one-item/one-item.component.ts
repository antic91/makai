import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ignoreElements } from 'rxjs/operators';
import { slideAnim } from '../animations/animations';

@Component({
  selector: 'app-one-item',
  templateUrl: './one-item.component.html',
  styleUrls: ['./one-item.component.css'],
  animations: [
    trigger("leftOut", [
      transition(":enter", [
        useAnimation(slideAnim, {
          params: {
            opacity1: 0,
            opacity2: 1,
            time: "100ms ease-in-out",
            translateValue: "translate3d",
            translateValue1: "translate3d",
            translate1: "100%",
            translate2: "0",
            translate3: "0",
            translate4: "0",
            translate5: "0",
            translate6: "0",
          }
        })
      ]),
      transition(":leave", [
        useAnimation(slideAnim, {
          params: {
            opacity1: 1,
            opacity2: 0,
            time: "100ms ease-in-out",
            translateValue: "",
            translateValue1: "translate3d",
            translate1: "",
            translate2: "",
            translate3: "",
            translate4: "100%",
            translate5: "0",
            translate6: "0",
          }
        })
      ])
    ]),
    trigger("rightIn", [
      transition(":enter", [
        useAnimation(slideAnim, {
          params: {
            opacity1: 0,
            opacity2: 1,
            time: "100ms ease-in-out",
            translateValue: "translate3d",
            translateValue1: "translate3d",
            translate1: "-100%",
            translate2: "0",
            translate3: "0",
            translate4: "0",
            translate5: "0",
            translate6: "0",
          }
        })
      ]),
      transition(":leave", [
        useAnimation(slideAnim, {
          params: {
            opacity1: 1,
            opacity2: 0,
            time: "100ms ease-in-out",
            translateValue: "translate3d",
            translateValue1: "translate3d",
            translate1: "0",
            translate2: "0",
            translate3: "0",
            translate4: "-100%",
            translate5: "0",
            translate6: "0",
          }
        })
      ])
    ]),
    trigger("bottomIn", [
      transition(":enter", [
        useAnimation(slideAnim, {
          params: {
            opacity1: 0,
            opacity2: 1,
            time: "300ms ease-in-out",
            translateValue: "translate3d",
            translateValue1: "translate3d",
            translate1: "0",
            translate2: "100%",
            translate3: "0",
            translate4: "0",
            translate5: "0",
            translate6: "0",
          }
        })
      ]),
      transition(":leave", [
        useAnimation(slideAnim, {
          params: {
            opacity1: 1,
            opacity2: 0,
            time: "300ms ease-in-out",
            translateValue: "translate3d",
            translateValue1: "translate3d",
            translate1: "0",
            translate2: "0",
            translate3: "0",
            translate4: "0",
            translate5: "100%",
            translate6: "0",
          }
        })
      ])
    ]),
    trigger("bottomInSec", [
      transition(":enter", [
        useAnimation(slideAnim, {
          params: {
            opacity1: 0,
            opacity2: 1,
            time: "1200ms ease-out",
            translateValue: "translate3d",
            translateValue1: "translate3d",
            translate1: "0",
            translate2: "100%",
            translate3: "0",
            translate4: "0",
            translate5: "0",
            translate6: "0",
          }
        })
      ])
    ])
  ]
})
export class OneItemComponent implements OnInit {

  @Input("item") item: any = {};
  @Input("hover") hover!: boolean;
  @Input("prodId") prodId!: number;
  firstPicture!: string;

  displayPrice: boolean = true;
  displayAddTo: boolean = false;

  constructor() {

  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {

    const arr = this.item.prod_pictures.split(",");

    this.firstPicture = arr[0];

    if (this.hover == true && this.prodId == this.item.prod_id) {
      this.displayPrice = false;
      setTimeout(() => {
        this.displayAddTo = true;
      }, 50);
    }

    if (this.hover == false && this.prodId == this.item.prod_id) {
      this.displayAddTo = false;
      setTimeout(() => {
        this.displayPrice = true;
      }, 50);
    }
  }


}
