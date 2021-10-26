import { trigger, transition, useAnimation } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { rotate } from 'src/app/animations/animations';

@Component({
  selector: 'app-text-shop',
  templateUrl: './text-shop.component.html',
  styleUrls: ['./text-shop.component.css'],
  animations: [
    trigger('rotate', [
      transition(':enter', [
        useAnimation(rotate, {
          params: {
            opacity1: 0,
            opacity2: 1,
            translate1: '0',
            translate2: '0',
            translate3: '1',
            translate4: '3deg',
            translate5: '0',
            translate6: '0',
            translate7: '0',
            translate8: '0',
            translate9: '30%',
            translate10: '0',
            time: '300ms ease-in',
            translateValue: 'rotate3d',
            translateValue1: 'translate3d'
          }
        })
      ])
    ])
  ]
})
export class TextShopComponent implements OnInit {
  @Input("product") product: any = {};
  displayText: boolean = false;
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.displayText = true;
    }, 1000);
  }

}
