import { trigger, transition, useAnimation } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { rotate } from 'src/app/animations/animations';

@Component({
  selector: 'app-brands-about',
  templateUrl: './brands-about.component.html',
  styleUrls: ['./brands-about.component.css'],
  animations: [
    trigger('showFromBottom', [
      transition(':enter', [
        useAnimation(rotate, {
          params: {
            opacity1: 0,
            opacity2: 1,
            translate1: '1',
            translate2: '1',
            translate3: '1',
            translate4: '4deg',
            translate5: '0',
            translate6: '0',
            translate7: '0',
            translate8: '0',
            translate9: '20%',
            translate10: '0',
            time: '600ms ease-in-out',
            translateValue: 'rotate3d',
            translateValue1: 'translate3d'
          }
        })
      ])
    ])
  ]
})
export class BrandsAboutComponent implements OnInit {
  @Input("showBrands") showBrands!: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
