import { trigger, transition, useAnimation, animate, state, style } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { fadeIn, scale, slideAnim } from 'src/app/animations/animations';

@Component({
  selector: 'app-blog-section',
  templateUrl: './blog-section.component.html',
  styleUrls: ['./blog-section.component.css'],
  animations: [
    trigger("slideRight", [
      transition(":enter", [
        useAnimation(slideAnim, {
          params: {
            opacity1: 0,
            opacity2: 1,
            translate1: '40%',
            translate2: '0',
            translate3: '0',
            translate4: '0',
            translate5: '0',
            translate6: '0',
            time: '900ms ease-in',
            translateValue: 'translate3d',
            translateValue1: 'translate3d'
          }
        })
      ])
    ]),
    trigger("slideLeft", [
      transition(":enter", [
        useAnimation(slideAnim, {
          params: {
            opacity1: 0,
            opacity2: 1,
            translate1: '-40%',
            translate2: '0',
            translate3: '0',
            translate4: '0',
            translate5: '0',
            translate6: '0',
            time: '900ms ease-in',
            translateValue: 'translate3d',
            translateValue1: 'translate3d'
          }
        })
      ])
    ]),

    trigger("slideTop", [
      transition(":enter", [
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
            time: '900ms ease-in',
            translateValue: 'translate3d',
            translateValue1: 'translate3d'
          }
        })
      ])
    ]),

    trigger("scale", [
    state('begin', style({transform: 'scale(1)'})),
      state('end', style({ transform: 'scale(1.05)' })),
      transition('begin => end', [
        animate(200)
      ]),
      transition('end => begin', [
        animate(200)
      ])
    ]),

    trigger("fadeIn", [
      transition(":enter", [
        useAnimation(fadeIn, {
          params: {
            Value: 0,
            Value1: 1,
            time: '300ms ease-in-out'
          }
        })
      ])
    ]),


  ]
})
export class BlogSectionComponent implements OnInit {
  @Input("displayBlog") displayBlog!: boolean;
  date!: string;
  header!: string;
  readMore!: string;

  displayFirst: boolean = false;
  displaySec: boolean = false;
  displayThird: boolean = false;
  displayFourth: boolean = false;

  scale1: boolean = false;
  scale2: boolean = false;
  scale3: boolean = false;
  scale4: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  setData(date: string,header: string, readMore: string, position: string): void{
    this.date = date;
    this.header = header;
    this.readMore = readMore;
    if (position == "displayFirst") {
      this.displayFirst = true;
      this.scale1 = true;
    }
    if (position == "displaySec") {
      this.displaySec = true;
      this.scale2 = true;
    }
    if (position == "displayThird") {
      this.displayThird = true;
      this.scale3 = true;
    }
    if (position == "displayFourth") {
      this.displayFourth = true;
      this.scale4 = true;
    }
  }

  mouseOut(): void{
    this.displayFirst = false;
    this.displaySec = false;
    this.displayThird = false;
    this.displayFourth = false;
    this.scale1 = false;
    this.scale2 = false;
    this.scale3 = false;
    this.scale4 = false;
  }
}
