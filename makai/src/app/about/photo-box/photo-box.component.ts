import { trigger, transition, useAnimation } from '@angular/animations';
import { Component, ElementRef, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { fadeIn, rotate } from 'src/app/animations/animations';

@Component({
  selector: 'app-photo-box',
  templateUrl: './photo-box.component.html',
  styleUrls: ['./photo-box.component.css'],
  animations: [
    trigger("hover", [
      transition(":enter", [
        useAnimation(fadeIn, {
          params: {
            Value: 0,
            Value1: 1,
            time: "400ms ease-out"
          }
        })
      ]),
      transition(":leave", [
        useAnimation(fadeIn, {
          params: {
            Value: 1,
            Value1: 0,
            time: "400ms ease-out"
          }
        })
      ])
    ]),

     trigger('SlideInLeft', [
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
            time: '1000ms ease-in-out',
            translateValue: 'rotate3d',
            translateValue1: 'translate3d'
          }
        })
      ])
    ])
  ]
})
export class PhotoBoxComponent implements OnInit {

  @ViewChild('photoBox', { read: ElementRef }) photoBox!: ElementRef;


  hover1: boolean = false;
  hover2: boolean = false;
  hover3: boolean = false;
  hover4: boolean = false;
  hover5: boolean = false;
  hover6: boolean = false;
  hover7: boolean = false;

  @Input("showItems") showItems!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  showAbsolute(event: string): void{
    if (this.photoBox.nativeElement.parentElement.clientWidth > 730) {
      if ("1" === event) this.hover1 = true;
      if ("2" === event) this.hover2 = true;
      if ("3" === event) this.hover3 = true;
      if ("4" === event) this.hover4 = true;
      if ("5" === event) this.hover5 = true;
      if ("6" === event) this.hover6 = true;
      if ("7" === event) this.hover7 = true;
    }
  }

  reset(): void{
    if (this.photoBox.nativeElement.parentElement.clientWidth > 730) {
      this.hover1 = false;
      this.hover2 = false;
      this.hover3 = false;
      this.hover4 = false;
      this.hover5 = false;
      this.hover6 = false;
      this.hover7 = false;
    }
  }


    /*Detecting width and setting up display of absolute image  on resize*/
  position($event: any): void{

    if (this.photoBox.nativeElement.parentElement.clientWidth > 730) {
      this.hover1 = false;
      this.hover2 = false;
      this.hover3 = false;
      this.hover4 = false;
      this.hover5 = false;
      this.hover6 = false;
      this.hover7 = false;
    } else {
      this.hover1 = true;
      this.hover2 = true;
      this.hover3 = true;
      this.hover4 = true;
      this.hover5 = true;
      this.hover6 = true;
      this.hover7 = true;
    }
  }

  /*catch the width to set items all off the time visible when refresh or page init*/
  ngOnChanges(changes: SimpleChanges): void {
    if (this.showItems == true) {
      if (this.photoBox.nativeElement.parentElement.clientWidth <= 730) {
          setTimeout(() => {
            this.hover1 = true;
            this.hover2 = true;
            this.hover3 = true;
            this.hover4 = true;
            this.hover5 = true;
            this.hover6 = true;
            this.hover7 = true;
          }, 900);
      }
    }
  }

}
