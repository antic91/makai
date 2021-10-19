import { trigger, transition, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { slideAnim } from 'src/app/animations/animations';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  animations: [
    trigger('slideAnim', [
      transition(':enter', [
        useAnimation(slideAnim, {
          params: {
            opacity1: 1,
            opacity2: 1,
            translate1: '100%',
            translate2: '0',
            translate3: '0',
            translate4: '0',
            translate5: '0',
            translate6: '0',
            time: '1200ms ease-in',
            translateValue: 'translate3d',
            translateValue1: 'translate3d'
          }
        })
      ])
    ]),

    trigger('textSlideAnim', [
      transition(':enter', [
        useAnimation(slideAnim, {
          params: {
            opacity1: 0,
            opacity2: 1,
            translate1: '0',
            translate2: '40%',
            translate3: '0',
            translate4: '0',
            translate5: '0',
            translate6: '0',
            time: '500ms ease-in',
            translateValue: 'translate3d',
            translateValue1: 'translate3d'
          }
        })
      ]),

      transition(':leave', [
        useAnimation(slideAnim, {
          params: {
            opacity1: 1,
            opacity2: 0,
            translate1: '0',
            translate2: '0',
            translate3: '0',
            translate4: '0',
            translate5: '40%',
            translate6: '0',
            time: '500ms ease-in',
            translateValue: 'translate3d',
            translateValue1: 'translate3d'
          }
        })
      ])

    ])

  ]
})
export class BannerComponent implements OnInit {
  display1: boolean = true;
  display2: boolean = true;
  display3: boolean = false;
  animtext1!: boolean;
  animtext2!: boolean;
  animtext3!: boolean;
  z1: number= 8;
  z2!: number;
  z3!: number;
  constructor() { }



  ngOnInit(): void {
    setTimeout(() => {
      this.display2 = false;
    }, 1300);

    setInterval(() => {

      if (this.display1) {
        this.z1 = 1;
        this.z2 = 8;
        this.z3 = 1;
        this.display2 = true;
          setTimeout(() => {
            this.display1 = false;
            this.display3 = false;
          }, 1300);

        return
      }

      if (this.display2) {
        this.z1 = 1;
        this.z2 = 1;
        this.z3 = 8;
        this.display3 = true;
        setTimeout(() => {
          this.display1 = false;
          this.display2 = false;
        }, 1300);

        return
      }

      if (this.display3) {
        this.z1 = 8;
        this.z2 = 1;
        this.z3 = 1;
        this.display1 = true;
        setTimeout(() => {
          this.display2 = false;
          this.display3 = false;
        }, 1300);

      }

    }, 6000);


  }
}
