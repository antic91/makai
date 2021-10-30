import { trigger, transition, useAnimation, animate, state, style } from '@angular/animations';
import { Component, Input, OnInit, ViewChild, ElementRef, SimpleChanges } from '@angular/core';
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
  @ViewChild('headerWidth', { read: ElementRef }) headerWidth!: ElementRef;
  date: string ='JUNE 25, 2021';
  header: string = 'Do you want to get lost in nature?';
  readMore: string = 'Read More';

  date1: string = 'JULY 6, 2021';
  header1: string = 'The 5 best surfboards';
  readMore1: string = 'Read More';

  date2: string = 'JULY 6, 2021';
  header2: string = 'Makai by the sea';
  readMore2: string = 'Read More';

  date3: string = 'JULY 6, 2021';
  header3: string = 'The importance of recycled materials';
  readMore3: string = 'Read More';

  displayFirst: boolean = false;
  displaySec: boolean = false;
  displayThird: boolean = false;
  displayFourth: boolean = false;
  displaySmaller: boolean = false;

  scale1: boolean = false;
  scale2: boolean = false;
  scale3: boolean = false;
  scale4: boolean = false;
  constructor() { }

  ngOnInit(): void {

  }

  setData(position: string): void{

    if (this.headerWidth.nativeElement.clientWidth > 730) {
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
  }

  mouseOut(): void{
    if (this.headerWidth.nativeElement.clientWidth > 730) {
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

  position($event: any): void{
    if (this.headerWidth.nativeElement.clientWidth > 730) {
      this.displaySmaller = false;
    } else {
      this.displaySmaller = true;
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.displayBlog == true) {
      if (this.headerWidth.nativeElement.clientWidth <= 730) {
          setTimeout(() => {
            this.displaySmaller = true;
          }, 900);
      }
    }
  }
}
